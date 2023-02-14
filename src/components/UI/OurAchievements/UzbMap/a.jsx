fill={
    currentId === 2 || isActiveFunc(positions, "khorazm")
      ? "#1B9C9F"
      : "rgb(188,225,226)"
  }
  stroke="white"
          strokeWidth="1.822"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={() => {
            findPosition("khorezm", 2);
          }}
          onMouseLeave={mouseOut}