import HomeButton from "./Buttons/HomeButton"
import SearchButton from "./Buttons/SearchButton"
import FavoritesButton from "./Buttons/FavoritesButton"
import ProfileButton from "./Buttons/UserButton"

function Footer() {
    return (
        <div className="footer">
         <HomeButton />
         <SearchButton />
         <FavoritesButton />
         <ProfileButton />
        </div>
    )
}

export default Footer
