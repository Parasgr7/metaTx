/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';

const QUICKNODE_ENDPOINT = process.env.REACT_APP_QUICKNODE_URL;

export function createProvider() {  
  return new ethers.providers.JsonRpcProvider(QUICKNODE_ENDPOINT, 5);
}