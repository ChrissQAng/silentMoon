import { userToView } from "../user.helpers.js";
import { User } from "../user.model.js";
import { Yoga } from "../../yoga/yoga.model.js";
import { Meditation } from "../../meditation/meditation.model.js";

export const addFavorite = async (updateInfo) => {
  console.log(updateInfo);
  const [user, meditation, yoga] = await Promise.all([
    User.findById(updateInfo.userId)
      .populate("meditationFavorites")
      .populate("yogaFavorites"),
    Meditation.findById(updateInfo.id),
    Yoga.findById(updateInfo.id),
  ]);

  if (!user) throw new Error("User not found");
  if (!meditation && !yoga) throw new Error("Inserted Id not found");

  const isFavoritesInYoga = user.yogaFavorites.some(
    (item) => item._id === updateInfo.id,
  );

  const isFavoritesInMeditation = user.meditationFavorites.some(
    (item) => item._id === updateInfo.id,
  );

  if (isFavoritesInYoga || isFavoritesInMeditation)
    throw new Error("Is already in Favorites");

  if (yoga) {
    user.yogaFavorites.push(updateInfo.id);
  } else {
    user.meditationFavorites.push(updateInfo.id);
  }
  await user.save();

  return userToView(user);
};
