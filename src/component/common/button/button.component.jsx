export const ButtonComponent = ({
  label = "Submit",
  type = "aubmit",
  clickEvent,
}) => {
  return (
    <button type={type} onClick={clickEvent}>
      {label}
    </button>
  );
};
