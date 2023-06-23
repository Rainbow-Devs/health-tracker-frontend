import { GenericButton } from "@atoms/GenericButton";

export const LoginPrompt = () => {
  return (
    <div>
      <p>Click the button below to log into GitHub.</p>
      <GenericButton aria-disabled={true} className="my-4">
        This button doesn’t work yet.
      </GenericButton>
    </div>
  );
};
