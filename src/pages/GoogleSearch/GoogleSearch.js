import GoogleSearchHeader from "../../components/GoogleSearchHeader/GoogleSearchHeader";
import GoogleLogo from "../../components/GoogleLogo/GoogleLogo";
import GoogleSearchBar from "../../components/GoogleSearchBar/GoogleSearchBar";
import GoogleHealthAlert from "../../components/GoogleHealthAlert/GoogleHealthAlert";

function GoogleSearch () {
    return (
        <main>
            <GoogleSearchHeader />
            <GoogleLogo />
            <GoogleSearchBar />
            <GoogleHealthAlert />
        </main>
    );
}

export default GoogleSearch ;