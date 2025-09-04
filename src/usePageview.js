import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageView() {
	const location = useLocation();

	useEffect(() => {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: "pageview",
			page_path: location.pathname,
			page_title: document.title,
		});
	}, [location]);
}
