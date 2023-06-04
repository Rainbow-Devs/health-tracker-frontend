import { GenericButton } from "@atoms/GenericButton";

export const LoginPrompt = () => {
  return (
    <>
      <p>Click the button below to log into Google.</p>
      <GenericButton aria-disabled={true}>
        This button doesn’t work yet.
      </GenericButton>
    </>
  );
};
