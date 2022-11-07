import axios from "axios";
import { IPools } from "../interfaces/IPools";
import { IUsers } from "../interfaces/IUsers";

interface ICreatePoolsDTO {
  title: string;
}

interface ICreateUsersDTO {
  name: string;
  email: string;
}

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3333",
});

export async function getPools() {
  const { data } = await axiosInstance.get<IPools>("pools");

  return data.total;
}

export async function createPools(body: ICreatePoolsDTO) {
  const { data } = await axiosInstance.post("pools", body);

  return data;
}

export async function getUsers() {
  const { data } = await axiosInstance.get<IUsers>("users");

  return data.total;
}
