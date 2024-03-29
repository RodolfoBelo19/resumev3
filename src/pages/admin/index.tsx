import { useAuth } from "@/presentation/hooks/useAuth";
import { useRouter } from "next/router";

const admin = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuth();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push } = useRouter();

  if (!user) {
    push("/login");
    return;
  }
  return <div></div>;
};

export default admin;
