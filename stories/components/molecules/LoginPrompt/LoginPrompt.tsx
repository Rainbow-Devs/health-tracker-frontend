import { GenericButton } from "../../atoms/GenericButton/GenericButton";

export const LoginPrompt = () => {
  return (
    <div className="flex flex-col space-y-4">
      <p>Click the button below to log into Google.</p>
      <GenericButton aria-disabled={true}>
        This button doesn’t work yet.
      </GenericButton>
    </div>
  );
};
