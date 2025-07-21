const NotFound = () => {
  return (
    <>
      <div>404 - Not Found</div>
      <button onClick={() => (window.location.href = "/")}>Go home</button>
    </>
  );
};

export default NotFound;
