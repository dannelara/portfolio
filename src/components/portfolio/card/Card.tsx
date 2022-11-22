import React, { useRef, useState } from "react";
import { Span } from "../../../utils";
import { Container } from "./Styles";
import Prism from ".pr";
interface CardProps {
  title: string;
  desc: string;
  bg_image: String;
}

export const Card: React.FC<CardProps> = ({ title, desc, bg_image }) => {
  const [showBigScreen, setShowBigScreen] = useState(false);

  const handleClick = (e: any) => {
    setShowBigScreen(!showBigScreen);
  };

  return (
    <Container type="cover" bg_image={bg_image}>
      <Container type="bg_cover" onClick={handleClick}>
        <Span type="card-main">{title}</Span>

        <Container type="item-big" showBigScreen={showBigScreen}>
          <Container type="content-cover">
            <Container type="title-cover">
              <Span type="big">Test</Span>
            </Container>

            <Container type="content-code">
              <pre
                className="language-javascript"
                style={{
                  height: "auto",
                  width: "50%",
                }}
              >
                {`/*
 * Breadth-first graph algorithm.
 */
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
}`}
              </pre>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
