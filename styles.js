import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  /* __________________ not necessary */

  .card {
  width: 70%;
  padding: 20px;
  margin-inline: auto;
  margin-block: 20px;
  background-color: var(--color-water);
}

.card--green {
  background-color: lightgreen;
}

.card--red {
  background-color: lightcoral;
}

.card--yellow {
  background-color: lightyellow;
}
.card--orange {
  background-color: orange;
}

.card--broun {
  background-color: burlywood;
}
.app > li {
  list-style: none;
}


`;
