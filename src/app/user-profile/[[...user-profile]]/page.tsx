import { Card } from "@/components/ui/card";
import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <Card className="border-none rounded-none flex flex-col justify-center items-center">
    <UserProfile
      path="/user-profile"
      appearance={{
        elements: {
          navbarMobileMenuRow: "hidden",
        },
      }}
    />
  </Card>
);

export default UserProfilePage;
