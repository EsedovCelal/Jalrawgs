const Log_in = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <label for="username">
          Username:
          <input type="text" />
        </label>
        <label for="password">
          password:
          <input type="password" />
        </label>
      </div>
    </div>
  );
};
export default Log_in;
