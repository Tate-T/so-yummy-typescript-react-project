import withAuth from "@/shared/HOC/withAuth";
import AddOwnRecipe from "@/widgets/AddOwnRecipe/AddOwnRecipe";

export default withAuth(() => {
    return (
        <AddOwnRecipe />
    );
});