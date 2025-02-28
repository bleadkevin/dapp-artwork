import { Response } from "miragejs";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";



export const formatDate = () => dayjs().format("YYYY-MM-DD HH:mm:ssZ");
