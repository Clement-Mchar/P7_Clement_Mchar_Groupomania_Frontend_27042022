import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logout = () => {
	const logout = async () => {
		const removeCookie = (key) => {
			if (window !== "undefined") {
				cookie.remove(key, { expires: 1 });
			}
		};

		await axios({
			method: "get",
			url: `${process.env.REACT_APP_API_URL}api/user/logout`,
			withCredentials: true,
		})
			.then(() => removeCookie("jwt"))
			.catch((err) => console.log(err));

		window.location = "/";
	};

	return (
		<li className="logout-btn flex">
			<button onClick={logout}>
				<FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
			</button>
		</li>
	);
};

export default Logout;
