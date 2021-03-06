import Footer from "./footer";
import Header from "./header";

function Layout(props) {
	return (
		<div className="flex w-full flex-col min-h-screen relative">
			<Header />
			<div className="flex-auto">{props.children}</div>
			<Footer />
		</div>
	);
}

export default Layout;