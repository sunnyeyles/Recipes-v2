import { Nav } from "../../components/custom/nav";
const About = async () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          About RecipeGenius
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to RecipeGenius, your ultimate destination for effortless
          recipe generation! Whether you're an experienced chef looking for
          inspiration or a beginner eager to explore the culinary world,
          RecipeGenius is here to make your cooking journey exciting and
          delicious.
        </p>

        <h3 className="mt-8 text-2xl font-extrabold text-gray-900">
          Our Mission
        </h3>
        <p className="mt-4 text-lg text-gray-600">
          At RecipeGenius, we believe that cooking should be fun, accessible,
          and stress-free for everyone. Our mission is to empower home cooks of
          all levels with a diverse range of recipes tailored to their tastes
          and preferences. With just a simple keyword, you can unlock a world of
          culinary possibilities and discover new and exciting dishes to delight
          your taste buds.
        </p>

        <h3 className="mt-8 text-2xl font-extrabold text-gray-900">
          How It Works
        </h3>
        <p className="mt-4 text-lg text-gray-600">
          Using cutting-edge artificial intelligence powered by OpenAI,
          RecipeGenius analyzes your input keyword and generates a curated list
          of recipes tailored to your needs. Whether you're craving a comforting
          bowl of pasta, a refreshing salad, or a decadent dessert, RecipeGenius
          has you covered. Our advanced algorithms ensure that each recipe is
          not only delicious but also easy to follow, with clear instructions
          and accessible ingredients.
        </p>

        <h3 className="mt-8 text-2xl font-extrabold text-gray-900">Features</h3>
        <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
          <li>
            Recipe Generation: Simply enter a keyword, and RecipeGenius will
            instantly generate a selection of mouthwatering recipes for you to
            explore.
          </li>
          <li>
            Customization Options: Filter recipes by dietary preferences,
            cooking time, and ingredients to find the perfect dish for any
            occasion.
          </li>
          <li>
            Save and Share: Save your favorite recipes for later and share them
            with friends and family to spread the joy of cooking.
          </li>
          <li>
            Interactive Experience: Dive deeper into the world of cooking with
            interactive features such as step-by-step tutorials, ingredient
            substitutions, and cooking tips from top chefs.
          </li>
        </ul>

        <h3 className="mt-8 text-2xl font-extrabold text-gray-900">
          Join the Community
        </h3>
        <p className="mt-4 text-lg text-gray-600">
          Join our vibrant community of food enthusiasts and share your culinary
          creations, tips, and tricks. Connect with fellow home cooks, swap
          recipe ideas, and inspire each other to create unforgettable dishes.
        </p>

        <h3 className="mt-8 text-2xl font-extrabold text-gray-900">
          Get Started Today
        </h3>
        <p className="mt-4 text-lg text-gray-600">
          Ready to embark on your culinary adventure? Visit RecipeGenius now and
          let the magic begin! Whether you're cooking for one, hosting a dinner
          party, or simply exploring new flavors, RecipeGenius is your trusted
          companion in the kitchen.
        </p>

        <p className="mt-4 text-lg text-gray-600">
          Happy Cooking with RecipeGenius!
        </p>
      </div>
    </div>
  );
};
export default About;
