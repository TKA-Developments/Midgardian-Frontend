import { HTMLAttributes, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { classNames } from "../../../util/string";
import { Button } from "../base/button/Button";
import { TextInput } from "../base/input/TextInput";

type SubscribeFormInternalProps = {
  status: string;
  message: string | Error | null;
  onValidated: (a: any) => any;
} & HTMLAttributes<HTMLDivElement>;

const SubscribeFormInternal = ({
  status,
  message = "",
  className,
  onValidated,
  ...props
}: SubscribeFormInternalProps) => {
  const [email, setEmail] = useState("");

  let messageComponent = null;
  switch (status) {
    case "error":
      messageComponent = (
        <div
          dangerouslySetInnerHTML={{ __html: message?.toString() ?? "" }}
          className="text-red-500"
        />
      );
      break;
    case "sending":
      messageComponent = <div className="text-on-background">Loading...</div>;
      break;
    case "success":
      messageComponent = (
        <div className="text-on-background">
          Done! You will be notified when we are done
        </div>
      );
    default:
  }
  return (
    <div className={classNames("flex flex-col gap-4", className)}>
      <div
        className="flex flex-col w-full md:flex-row gap-[8px] md:gap-[16px]"
        {...props}
      >
        <TextInput
          placeholder="✉️ Email address"
          disabled={status === "sending"}
          className="w-full text-on-background font-sans"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className="whitespace-nowrap font-sans font-bold"
          onClick={() => {
            onValidated({
              EMAIL: email,
            });
          }}
        >
          Join Waitlist
        </Button>
      </div>
      {messageComponent}
    </div>
  );
};

export type SubscribeFormProps = HTMLAttributes<HTMLDivElement>;

export const SubscribeForm = ({ className, ...props }: SubscribeFormProps) => {
  const [email, setEmail] = useState("");

  return (
    <MailchimpSubscribe
      url={
        "https://gmail.us14.list-manage.com/subscribe/post?u=7b3cb4da1841991402a6fae0c&id=d419b5a140"
      }
      render={({ subscribe, status, message }) => (
        <SubscribeFormInternal
          status={status ?? ""}
          message={message}
          onValidated={(formData) => subscribe(formData)}
          className={className}
          {...props}
        />
      )}
    />
  );
};
