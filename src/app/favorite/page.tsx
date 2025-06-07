import Favorites from "@/widgets/Favorites/Favorites";
import withAuth from "@/shared/HOC/withAuth";

export default withAuth(() => {
    return (
        <Favorites />
    );
});