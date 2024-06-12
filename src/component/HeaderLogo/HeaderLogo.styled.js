import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
	position: absolute;
	top: 29.41px;
	left: 50%;
	transform: translate(-50%, 0);

	@media (max-width: 485px) {
		left: 230px;
	}

	@media (max-width: 380px) {
		display: none;
	}
`;