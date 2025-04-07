import { LoadFields } from "./LoadFields";

type PersonalProps = {
  inputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  update: {
    [key: string]: string;
  };
};

export function Personal(props: PersonalProps) {
  const inputs = ["Name", "Email", "Phone Number", "Address"];

  return (
    <>
      <LoadFields
        inputList={inputs}
        inputChange={props.inputChange}
        update={props.update}
      />
      <textarea
        name="Personal Description"
        id="p-description"
        cols={30}
        rows={8}
        onChange={props.inputChange}
        value={
          typeof props.update == "object" ? props.update["p-description"] : ""
        }
        placeholder="<optional> Tell something about your history..."
      ></textarea>
    </>
  );
}
