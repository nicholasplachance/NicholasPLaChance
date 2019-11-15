import React from 'react';
import '../Style.css';

function Main() {
  return (
    <main>
      <div className="hero-image"></div>
      <div className="flex-container--mobile flex-container--desktop">
        <section>
          <h2 className="sub-header">Some Fake Heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima
            omnis suscipit, ab veritatis eaque cupiditate voluptatem
            reprehenderit porro cumque maiores? Provident at amet praesentium
            minus unde magni cupiditate eligendi?
          </p>
          <a>Read more...</a>
        </section>
        <section>
          <h2 className="sub-header">Some Fake Heading</h2>
          <p>
            Obcaecati a assumenda quasi sed temporibus sequi ratione odio ut
            numquam, quod sapiente nihil illo soluta eius nam doloribus aliquid?
            Doloribus natus animi aliquid vero molestias eveniet necessitatibus
            consectetur optio?
          </p>
          <a>Read more...</a>
        </section>
        <section>
          <h2 className="sub-header">Some Fake Heading</h2>
          <p>
            Provident consectetur dolores rem adipisci necessitatibus assumenda
            quibusdam eum quia, est rerum maiores eius ut inventore minus labore
            veritatis, vel dignissimos voluptate temporibus odit pariatur
            eligendi incidunt doloremque iste! Tenetur?
          </p>
          <a>Read more...</a>
        </section>
      </div>
    </main>
  );
}

export default Main
