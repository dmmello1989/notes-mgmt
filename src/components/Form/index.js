export const Form = () => {
  return (
    <form>
      <input placeholder="Title" />
      <textarea row={15} placeholder="Write your note.." />
      <button>Create Note</button>
    </form>
  );
};