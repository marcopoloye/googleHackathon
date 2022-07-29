import GoogleSearchHeader from "../../components/GoogleSearchHeader/GoogleSearchHeader";
import GoogleLogo from "../../components/GoogleLogo/GoogleLogo";
import GoogleSearchBar from "../../components/GoogleSearchBar/GoogleSearchBar";
import GoogleHealthAlert from "../../components/GoogleHealthAlert/GoogleHealthAlert";

function GoogleSearch () {
    return (
        <>
            <GoogleSearchHeader />
            <GoogleLogo />
            <GoogleSearchBar />
            <GoogleHealthAlert />
        </>
    );
}

export default GoogleSearch ;