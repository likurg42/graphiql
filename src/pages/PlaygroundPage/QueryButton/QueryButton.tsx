export const QueryButton = ({ submit }: { submit: () => void }) => {
  return (
    <button type="button" onClick={submit}>
      Run
    </button>
  );
};
