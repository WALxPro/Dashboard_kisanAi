import React from "react";
import Button from "./Button";

const SocialButton = ({ Icon, text, onClick }) => {
  return (
    <Button
      type="button"
      variant="outline"
      className="h-12 flex-1 text-input flex items-center justify-center"
      onClick={onClick}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {text}
    </Button>
  );
};

export default SocialButton;