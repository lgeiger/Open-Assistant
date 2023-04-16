import { Meta } from "@storybook/react";

import { LikertButtons } from "./LikertButtons";
import { SubmitButton } from "./Submit";

export default {
  title: "Buttons",
} as Meta<typeof SubmitButton>;

export const Submit = () => <SubmitButton>Submit</SubmitButton>;

export const Likert = () => {
  return (
    <LikertButtons
      isDisabled={false}
      count={3}
      data-cy="label-options"
      onChange={() => console.log("onChange")}
    ></LikertButtons>
  );
};
