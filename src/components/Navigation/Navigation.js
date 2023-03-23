import React from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? styles.active : "" ;
  }
	return (
		<div className={styles.navPanel}>
			<Link to="/">
				<div className={styles.navLink}>
					<img
						className={styles.icon}
						src={
							"https://assets.website-files.com/62e852b3b3432f63a22b8844/62ebb5e41c8d3583d5aae2c2_streamlinehq-interface-home-2-interface-essential-250.SVG"
						}
					/>
					<div>Головна</div>
				</div>
			</Link>

			<Link to="/camp-program" className={isActive("/camp-program")}>
				<div className={styles.navLink}>
					<img
						className={styles.icon}
						src={
							"https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8ea7a1e7c87282c7450b6_streamlinehq-interface-content-book-open-interface-essential-250.SVG"
						}
					/>
					<div>Програма</div>
				</div>
			</Link>

			<Link to="/about">
				<div className={styles.navLink}>
					<img
						className={styles.icon}
						src={
							"https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f1219bd3c443f28ba3f7_streamlinehq-interface-lighting-light-bulb-on-interface-essential-250-3.SVG"
						}
					/>
					<div>Про табір</div>
				</div>
			</Link>

			<Link to="/things">
				<div className={styles.navLink}>
					<img
						className={styles.icon}
						src={
							"https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8fb91f9a283de58e0318d_streamlinehq-travel-airport-baggage-maps-travel-250-2.SVG"
						}
					/>
					<div>Що брати з собою?</div>
				</div>
			</Link>

			<Link to="/location">
				<div className={styles.navLink}>
					<img
						className={styles.icon}
						src={
							"https://assets.website-files.com/62e852b3b3432f63a22b8844/62e90516682d7c1ce06ca27b_streamlinehq-travel-map-maps-travel-250-3.SVG"
						}
					/>
					<div>Розташування</div>
				</div>
			</Link>

			<Link to="/our-team">
				<div className={styles.navLink}>
					<img
						className={styles.icon}
						src={
							"https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8fa9930bdfe5c8b4ef6ad_streamlinehq-interface-user-multiple-interface-essential-250.SVG"
						}
					/>
					<div>Команда</div>
				</div>
			</Link>

			<Link to="/photo">
				<div className={styles.navLink}>
					<img
						className={styles.icon}
						src={
							"https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f4544af443508a817eac_streamlinehq-image-camera-1-images-photography-250.SVG"
						}
					/>
					<div>Фото</div>
				</div>
			</Link>

			<Link to="/contacts" className={isActive("/contacts")}>
				<div className={styles.navLink}>
					<img
						className={styles.icon}
						src={
							"https://assets.website-files.com/62e852b3b3432f63a22b8844/62e9862e0dcf927adce2de5c_streamlinehq-phone-telephone-ringing-phone-250.SVG"
						}
					/>
					<div>Контакти</div>
				</div>
			</Link>

			<Link to="/for-parents">
				<div className={styles.navLink}>
					<img
						className={styles.icon}
						src={
							"https://assets.website-files.com/62e852b3b3432f63a22b8844/62e8f3a6fcf13cc3390a727e_streamlinehq-shopping-cloth-accessories-tall-hat-money-shopping-250.SVG"
						}
					/>
					<div>Для батьків</div>
				</div>
			</Link>
		</div>
	);
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
