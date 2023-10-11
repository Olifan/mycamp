import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = () => (
	<div className={styles.footer}>
		<p>Created by OlifanCharuk</p>
		<div className={styles.footerLink}>
			<a href="https://www.tiktok.com/@mycamp.com.ua">Tik Tok</a>
			<a href="https://www.instagram.com/mycamp.com.ua">Instagram</a>
			<a href="https://www.facebook.com/mycamp.com.ua">Facebook</a>
		</div>
	</div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
