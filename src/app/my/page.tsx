import withAuth from "@/shared/HOC/withAuth";
import MyRecipesPage from "@/widgets/MyRecipesPage/MyRecipesPage";

export default withAuth(() => {
    return (
        <MyRecipesPage />
    );
});