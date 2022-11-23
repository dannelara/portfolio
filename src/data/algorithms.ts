interface Data {
  title: string;
  code: string;
  languague: String;
}

const data: Data[] = [
  {
    title: "Breadth-first",
    code: `
    public class BFS {
       public int[] edge_to;
       private boolean[] marked;
       private int self;
    
       public BFS(int v, ArrayList<Vertex<Integer>> elements) {
           self = v;
           edge_to = new int[elements.size()];
           marked = new boolean[elements.size()];
           bfs(v, elements);
       }
    
       public boolean has_path_to(int v) {
           return marked[v];
       }
    
       public Iterable<Integer> path_to(int v) {
           if (!has_path_to(v))
               throw new Error("There's no path to this vertex");
    
           ArrayList<Integer> path = new ArrayList<>();
           int x = v;
    
           while (x != self) {
               path.add(x);
               x = edge_to[x];
           }
    
           path.add(self);
    
           Collections.reverse(path);
           return new Iterator(path);
       }
    
       private void bfs(int v, ArrayList<Vertex<Integer>> list) {
           Vertex<Integer> vx = list.get(v);
           _bfs(vx, list);
       }
    
       private void _bfs(Vertex<Integer> v, ArrayList<Vertex<Integer>> list) {
           int valI = list.indexOf(v);
           Queue<Vertex<Integer>> q = new Queue<>();
    
           q.addLast(v);
    
           marked[valI] = true;
    
           while (!q.isEmpty()) {
               Vertex<Integer> vv = q.pop().data;
    
               for (Edge<Integer> w : list.get(vv.id).get_adj()) {
                   Vertex<Integer> currVx = list.get((int) w.dest);
    
                   if (!marked[list.indexOf(currVx)]) {
    
                       q.addFirst(list.get((int) w.dest));
    
                       marked[list.indexOf(currVx)] = true;
                       edge_to[list.indexOf(currVx)] = list.indexOf(vv);
    
                   }
    
               }
           }
       }
    }`,
    languague: "java",
  },
  {
    title: "Depth-first",
    code: `
    public class DFS {
        private boolean[] marked;
        public ArrayList<Integer> post;
        private int size;
        private int[] edge_to;
        private int self;
    
        public DFS(ArrayList<Vertex<Integer>> elements, int start) {
            self = start;
            size = elements.size();
            marked = new boolean[size];
            edge_to = new int[size];
            post = new ArrayList<>();
    
            dfs(start, elements);
        }
    
        public boolean has_path_to(int v) {
            return marked[v];
        }
    
        public Iterable<Integer> path_to(int v) {
            if (!has_path_to(v))
                throw new Error("There's no path to this vertex");
    
            ArrayList<Integer> path_to = new ArrayList<>();
            int x = v;
    
            while (x != self) {
                path_to.add(x);
                x = edge_to[x];
            }
    
            path_to.add(self);
    
            Collections.reverse(path_to);
            return new Iterator(path_to);
        }
    
        private void dfs(int v, ArrayList<Vertex<Integer>> list) {
            marked[v] = true;
    
            for (Edge<Integer> w : list.get(v).get_adj()) {
                int dest = w.dest;
                if (!marked[dest]) {
                    dfs(dest, list);
                    edge_to[dest] = v;
                }
            }
    
        }
    
        public ArrayList<Integer> reverse_post() {
            Collections.reverse(post);
            return post;
        }
    }`,
    languague: "java",
  },
  {
    title: "Dijkstra shortest-path",
    code: `
    public class DijkstraSP {
        private Edge<Integer>[] edge_to;
        public double[] dist_to;
        MinHeap hp;
    
        public DijkstraSP(int s, ArrayList<Vertex<Integer>> list) {
    
            edge_to = new Edge[list.size()];
            dist_to = new double[list.size()];
    
            // Fill dist to with max values.
            fill_dist_to();
            dist_to[s] = 0.0;
            hp = new MinHeap(list.size());
    
            HeapEntry entry = new HeapEntry(0.0, s);
    
            hp.insert(entry);
    
            while (!hp.is_empty()) {
    
                HeapEntry v = hp.delete_min();
    
                for (Edge<Integer> e : list.get(v.val).get_adj()) {
                    relax(e);
                }
    
            }
        }
    
        private void relax(Edge<Integer> e) {
    
            if (dist_to[e.dest] > dist_to[e.src] + e.weight) {
                dist_to[e.dest] = dist_to[e.src] + e.weight;
                edge_to[e.dest] = e;
                boolean insert_to_heap = true;
                for (HeapEntry he : hp.entries()) {
    
                    if (he != null && he.val == e.dest) {
                        he.dist = dist_to[e.dest];
                        hp.heapify(hp.entries());
                        insert_to_heap = false;
                        break;
                    }
                }
                if (insert_to_heap) {
                    hp.insert(new HeapEntry(dist_to[e.dest], e.dest));
                }
    
            }
        }
    
        private void fill_dist_to() {
    
            for (int i = 0; i < dist_to.length; i++) {
                dist_to[i] = Integer.MAX_VALUE;
            }
    
        }
    }
    `,
    languague: "java",
  },
  {
    title: "Strongly connected components",
    code: `
   public class SCC {
       private boolean[] marked;
       private int ids[];
       private int cnt;;
       private int size;
   
       public SCC(CoursesGraph gp) {
           size = gp.size;
           marked = new boolean[gp.size];
           ids = new int[gp.size];
           cnt = 0;
   
           DFO dfo = new DFO(gp.reverse());
   
           for (int v : dfo.reverse_post()) {
               if (!marked[v]) {
                   dfs(gp, v);
                   cnt++;
               }
           }
       }
   
       private void dfs(CoursesGraph gp, int v) {
           marked[v] = true;
           ids[v] = cnt;
   
           for (int w : gp.adj(v)) {
               if (!marked[w]) {
                   dfs(gp, w);
               }
           }
       }
   
       public ArrayList<Integer>[] components() {
           ArrayList<Integer>[] tmp = new ArrayList[size];
   
           for (int i = 0; i < tmp.length; i++) {
               tmp[i] = new ArrayList<Integer>();
           }
   
           for (int j = 0; j < ids.length; j++) {
               int c = ids[j];
   
               for (ArrayList<Integer> subL : tmp) {
                   if (!subL.contains(c)) {
                       tmp[c].add(j);
                       break;
                   }
               }
           }
   
           return tmp;
       }
   
   }`,
    languague: "java",
  },
];

export default data;
