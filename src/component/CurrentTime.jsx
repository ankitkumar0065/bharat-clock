let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      The cureent time is:{" "}
      <p className="fw-bolder">
        {time.toLocaleTimeString()} -{time.toLocaleDateString()}{" "}
      </p>
    </p>
  );
};

export default CurrentTime;
