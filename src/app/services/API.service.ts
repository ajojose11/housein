/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection";
  items?: Array<Category | null> | null;
  nextToken?: string | null;
};

export type Category = {
  __typename: "Category";
  id?: string;
  name?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
  ads?: ModelAdvertisementsConnection;
};

export type ModelAdvertisementsConnection = {
  __typename: "ModelAdvertisementsConnection";
  items?: Array<Advertisements | null> | null;
  nextToken?: string | null;
};

export type Advertisements = {
  __typename: "Advertisements";
  id?: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  price?: string | null;
  modeID?: string | null;
  createdTime?: string;
  createdAt?: string;
  updatedAt?: string;
  user?: ModelUserConnection;
  category?: ModelCategoryConnection;
  mode?: ModelModeConnection;
  owner?: string | null;
  images?: ModelPictureConnection;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items?: Array<User | null> | null;
  nextToken?: string | null;
};

export type User = {
  __typename: "User";
  id?: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
  ads?: ModelAdvertisementsConnection;
  profileImage?: ModelProfilePictureConnection;
};

export type ModelProfilePictureConnection = {
  __typename: "ModelProfilePictureConnection";
  items?: Array<ProfilePicture | null> | null;
  nextToken?: string | null;
};

export type ProfilePicture = {
  __typename: "ProfilePicture";
  id?: string;
  name?: string | null;
  userID?: string | null;
  file?: S3Object;
  createdAt?: string;
  updatedAt?: string;
  user?: ModelUserConnection;
  owner?: string | null;
};

export type S3Object = {
  __typename: "S3Object";
  bucket?: string;
  region?: string;
  key?: string;
};

export type ModelModeConnection = {
  __typename: "ModelModeConnection";
  items?: Array<Mode | null> | null;
  nextToken?: string | null;
};

export type Mode = {
  __typename: "Mode";
  id?: string;
  name?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
  ads?: ModelAdvertisementsConnection;
};

export type ModelPictureConnection = {
  __typename: "ModelPictureConnection";
  items?: Array<Picture | null> | null;
  nextToken?: string | null;
};

export type Picture = {
  __typename: "Picture";
  id?: string;
  name?: string | null;
  adID?: string | null;
  file?: S3Object;
  createdAt?: string;
  updatedAt?: string;
  ad?: ModelAdvertisementsConnection;
  owner?: string | null;
};

export type ModelAdvertisementsFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  categoryID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  country?: ModelStringInput | null;
  state?: ModelStringInput | null;
  city?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  price?: ModelStringInput | null;
  modeID?: ModelIDInput | null;
  createdTime?: ModelStringInput | null;
  and?: Array<ModelAdvertisementsFilterInput | null> | null;
  or?: Array<ModelAdvertisementsFilterInput | null> | null;
  not?: ModelAdvertisementsFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateUserInput = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateCategoryInput = {
  id?: string | null;
  name?: string | null;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
};

export type DeleteCategoryInput = {
  id?: string | null;
};

export type CreateModeInput = {
  id?: string | null;
  name?: string | null;
};

export type ModelModeConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelModeConditionInput | null> | null;
  or?: Array<ModelModeConditionInput | null> | null;
  not?: ModelModeConditionInput | null;
};

export type UpdateModeInput = {
  id: string;
  name?: string | null;
};

export type DeleteModeInput = {
  id?: string | null;
};

export type CreateAdvertisementsInput = {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  price?: string | null;
  modeID?: string | null;
  createdTime: string | Date;
};

export type ModelAdvertisementsConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  categoryID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  country?: ModelStringInput | null;
  state?: ModelStringInput | null;
  city?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  price?: ModelStringInput | null;
  modeID?: ModelIDInput | null;
  createdTime?: ModelStringInput | null;
  and?: Array<ModelAdvertisementsConditionInput | null> | null;
  or?: Array<ModelAdvertisementsConditionInput | null> | null;
  not?: ModelAdvertisementsConditionInput | null;
};

export type UpdateAdvertisementsInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  price?: string | null;
  modeID?: string | null;
  createdTime?: string | null;
};

export type DeleteAdvertisementsInput = {
  id?: string | null;
};

export type CreatePictureInput = {
  id?: string | null;
  name?: string | null;
  adID?: string | null;
  file?: S3ObjectInput | null;
};

export type S3ObjectInput = {
  bucket: string;
  region: string;
  key: string;
};

export type ModelPictureConditionInput = {
  name?: ModelStringInput | null;
  adID?: ModelIDInput | null;
  and?: Array<ModelPictureConditionInput | null> | null;
  or?: Array<ModelPictureConditionInput | null> | null;
  not?: ModelPictureConditionInput | null;
};

export type UpdatePictureInput = {
  id: string;
  name?: string | null;
  adID?: string | null;
  file?: S3ObjectInput | null;
};

export type DeletePictureInput = {
  id?: string | null;
};

export type CreateProfilePictureInput = {
  id?: string | null;
  name?: string | null;
  userID?: string | null;
  file?: S3ObjectInput | null;
};

export type ModelProfilePictureConditionInput = {
  name?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelProfilePictureConditionInput | null> | null;
  or?: Array<ModelProfilePictureConditionInput | null> | null;
  not?: ModelProfilePictureConditionInput | null;
};

export type UpdateProfilePictureInput = {
  id: string;
  name?: string | null;
  userID?: string | null;
  file?: S3ObjectInput | null;
};

export type DeleteProfilePictureInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelModeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelModeFilterInput | null> | null;
  or?: Array<ModelModeFilterInput | null> | null;
  not?: ModelModeFilterInput | null;
};

export type ModelPictureFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  adID?: ModelIDInput | null;
  and?: Array<ModelPictureFilterInput | null> | null;
  or?: Array<ModelPictureFilterInput | null> | null;
  not?: ModelPictureFilterInput | null;
};

export type ModelProfilePictureFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelProfilePictureFilterInput | null> | null;
  or?: Array<ModelProfilePictureFilterInput | null> | null;
  not?: ModelProfilePictureFilterInput | null;
};

export type ListCategoryIDQuery = {
  __typename: "ModelCategoryConnection";
  items?: Array<{
    __typename: "Category";
    id: string;
    name?: string | null;
    ads?: {
      __typename: "ModelAdvertisementsConnection";
      items?: Array<{
        __typename: "Advertisements";
        title?: string | null;
      } | null> | null;
    } | null;
  } | null> | null;
};

export type ListAdsHomeQuery = {
  __typename: "ModelAdvertisementsConnection";
  items?: Array<{
    __typename: "Advertisements";
    id: string;
    title?: string | null;
    description?: string | null;
    categoryID?: string | null;
    userID?: string | null;
    country?: string | null;
    price?: string | null;
    state?: string | null;
    city?: string | null;
    phone?: string | null;
    createdTime: string;
    createdAt: string;
    updatedAt: string;
    user?: {
      __typename: "ModelUserConnection";
      items?: Array<{
        __typename: "User";
        name?: string | null;
      } | null> | null;
    } | null;
    category?: {
      __typename: "ModelCategoryConnection";
      items?: Array<{
        __typename: "Category";
        name?: string | null;
      } | null> | null;
    } | null;
    mode?: {
      __typename: "ModelModeConnection";
      items?: Array<{
        __typename: "Mode";
        name?: string | null;
      } | null> | null;
    } | null;
    images?: {
      __typename: "ModelPictureConnection";
      items?: Array<{
        __typename: "Picture";
        file?: {
          __typename: "S3Object";
          key: string;
        } | null;
      } | null> | null;
    } | null;
  } | null> | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  profileImage?: {
    __typename: "ModelProfilePictureConnection";
    items?: Array<{
      __typename: "ProfilePicture";
      id: string;
      name?: string | null;
      userID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  profileImage?: {
    __typename: "ModelProfilePictureConnection";
    items?: Array<{
      __typename: "ProfilePicture";
      id: string;
      name?: string | null;
      userID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  profileImage?: {
    __typename: "ModelProfilePictureConnection";
    items?: Array<{
      __typename: "ProfilePicture";
      id: string;
      name?: string | null;
      userID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateModeMutation = {
  __typename: "Mode";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateModeMutation = {
  __typename: "Mode";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteModeMutation = {
  __typename: "Mode";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateAdvertisementsMutation = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  price?: string | null;
  modeID?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  mode?: {
    __typename: "ModelModeConnection";
    items?: Array<{
      __typename: "Mode";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
  images?: {
    __typename: "ModelPictureConnection";
    items?: Array<{
      __typename: "Picture";
      id: string;
      name?: string | null;
      adID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateAdvertisementsMutation = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  price?: string | null;
  modeID?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  mode?: {
    __typename: "ModelModeConnection";
    items?: Array<{
      __typename: "Mode";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
  images?: {
    __typename: "ModelPictureConnection";
    items?: Array<{
      __typename: "Picture";
      id: string;
      name?: string | null;
      adID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteAdvertisementsMutation = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  price?: string | null;
  modeID?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  mode?: {
    __typename: "ModelModeConnection";
    items?: Array<{
      __typename: "Mode";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
  images?: {
    __typename: "ModelPictureConnection";
    items?: Array<{
      __typename: "Picture";
      id: string;
      name?: string | null;
      adID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreatePictureMutation = {
  __typename: "Picture";
  id: string;
  name?: string | null;
  adID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  ad?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type UpdatePictureMutation = {
  __typename: "Picture";
  id: string;
  name?: string | null;
  adID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  ad?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type DeletePictureMutation = {
  __typename: "Picture";
  id: string;
  name?: string | null;
  adID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  ad?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type CreateProfilePictureMutation = {
  __typename: "ProfilePicture";
  id: string;
  name?: string | null;
  userID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type UpdateProfilePictureMutation = {
  __typename: "ProfilePicture";
  id: string;
  name?: string | null;
  userID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type DeleteProfilePictureMutation = {
  __typename: "ProfilePicture";
  id: string;
  name?: string | null;
  userID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  profileImage?: {
    __typename: "ModelProfilePictureConnection";
    items?: Array<{
      __typename: "ProfilePicture";
      id: string;
      name?: string | null;
      userID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    id: string;
    name?: string | null;
    email?: string | null;
    address?: string | null;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    ads?: {
      __typename: "ModelAdvertisementsConnection";
      nextToken?: string | null;
    } | null;
    profileImage?: {
      __typename: "ModelProfilePictureConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListCategorysQuery = {
  __typename: "ModelCategoryConnection";
  items?: Array<{
    __typename: "Category";
    id: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    ads?: {
      __typename: "ModelAdvertisementsConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetModeQuery = {
  __typename: "Mode";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListModesQuery = {
  __typename: "ModelModeConnection";
  items?: Array<{
    __typename: "Mode";
    id: string;
    name?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    ads?: {
      __typename: "ModelAdvertisementsConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetAdvertisementsQuery = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  price?: string | null;
  modeID?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  mode?: {
    __typename: "ModelModeConnection";
    items?: Array<{
      __typename: "Mode";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
  images?: {
    __typename: "ModelPictureConnection";
    items?: Array<{
      __typename: "Picture";
      id: string;
      name?: string | null;
      adID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListAdvertisementssQuery = {
  __typename: "ModelAdvertisementsConnection";
  items?: Array<{
    __typename: "Advertisements";
    id: string;
    title?: string | null;
    description?: string | null;
    categoryID?: string | null;
    userID?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    phone?: string | null;
    price?: string | null;
    modeID?: string | null;
    createdTime: string;
    createdAt: string;
    updatedAt: string;
    user?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    category?: {
      __typename: "ModelCategoryConnection";
      nextToken?: string | null;
    } | null;
    mode?: {
      __typename: "ModelModeConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
    images?: {
      __typename: "ModelPictureConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPictureQuery = {
  __typename: "Picture";
  id: string;
  name?: string | null;
  adID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  ad?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type ListPicturesQuery = {
  __typename: "ModelPictureConnection";
  items?: Array<{
    __typename: "Picture";
    id: string;
    name?: string | null;
    adID?: string | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    ad?: {
      __typename: "ModelAdvertisementsConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetProfilePictureQuery = {
  __typename: "ProfilePicture";
  id: string;
  name?: string | null;
  userID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type ListProfilePicturesQuery = {
  __typename: "ModelProfilePictureConnection";
  items?: Array<{
    __typename: "ProfilePicture";
    id: string;
    name?: string | null;
    userID?: string | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    user?: {
      __typename: "ModelUserConnection";
      nextToken?: string | null;
    } | null;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  profileImage?: {
    __typename: "ModelProfilePictureConnection";
    items?: Array<{
      __typename: "ProfilePicture";
      id: string;
      name?: string | null;
      userID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  profileImage?: {
    __typename: "ModelProfilePictureConnection";
    items?: Array<{
      __typename: "ProfilePicture";
      id: string;
      name?: string | null;
      userID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  profileImage?: {
    __typename: "ModelProfilePictureConnection";
    items?: Array<{
      __typename: "ProfilePicture";
      id: string;
      name?: string | null;
      userID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateModeSubscription = {
  __typename: "Mode";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateModeSubscription = {
  __typename: "Mode";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteModeSubscription = {
  __typename: "Mode";
  id: string;
  name?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  ads?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateAdvertisementsSubscription = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  price?: string | null;
  modeID?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  mode?: {
    __typename: "ModelModeConnection";
    items?: Array<{
      __typename: "Mode";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
  images?: {
    __typename: "ModelPictureConnection";
    items?: Array<{
      __typename: "Picture";
      id: string;
      name?: string | null;
      adID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateAdvertisementsSubscription = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  price?: string | null;
  modeID?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  mode?: {
    __typename: "ModelModeConnection";
    items?: Array<{
      __typename: "Mode";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
  images?: {
    __typename: "ModelPictureConnection";
    items?: Array<{
      __typename: "Picture";
      id: string;
      name?: string | null;
      adID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteAdvertisementsSubscription = {
  __typename: "Advertisements";
  id: string;
  title?: string | null;
  description?: string | null;
  categoryID?: string | null;
  userID?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone?: string | null;
  price?: string | null;
  modeID?: string | null;
  createdTime: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  mode?: {
    __typename: "ModelModeConnection";
    items?: Array<{
      __typename: "Mode";
      id: string;
      name?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
  images?: {
    __typename: "ModelPictureConnection";
    items?: Array<{
      __typename: "Picture";
      id: string;
      name?: string | null;
      adID?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreatePictureSubscription = {
  __typename: "Picture";
  id: string;
  name?: string | null;
  adID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  ad?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type OnUpdatePictureSubscription = {
  __typename: "Picture";
  id: string;
  name?: string | null;
  adID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  ad?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type OnDeletePictureSubscription = {
  __typename: "Picture";
  id: string;
  name?: string | null;
  adID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  ad?: {
    __typename: "ModelAdvertisementsConnection";
    items?: Array<{
      __typename: "Advertisements";
      id: string;
      title?: string | null;
      description?: string | null;
      categoryID?: string | null;
      userID?: string | null;
      country?: string | null;
      state?: string | null;
      city?: string | null;
      phone?: string | null;
      price?: string | null;
      modeID?: string | null;
      createdTime: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type OnCreateProfilePictureSubscription = {
  __typename: "ProfilePicture";
  id: string;
  name?: string | null;
  userID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type OnUpdateProfilePictureSubscription = {
  __typename: "ProfilePicture";
  id: string;
  name?: string | null;
  userID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type OnDeleteProfilePictureSubscription = {
  __typename: "ProfilePicture";
  id: string;
  name?: string | null;
  userID?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  user?: {
    __typename: "ModelUserConnection";
    items?: Array<{
      __typename: "User";
      id: string;
      name?: string | null;
      email?: string | null;
      address?: string | null;
      phone?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async ListCategoryID(): Promise<ListCategoryIDQuery> {
    const statement = `query ListCategoryID {
        listCategorys {
          __typename
          items {
            __typename
            id
            name
            ads {
              __typename
              items {
                __typename
                title
              }
            }
          }
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <ListCategoryIDQuery>response.data.listCategorys;
  }
  async ListAdsHome(
    filter?: ModelAdvertisementsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAdsHomeQuery> {
    const statement = `query ListAdsHome($filter: ModelAdvertisementsFilterInput, $limit: Int, $nextToken: String) {
        listAdvertisementss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            categoryID
            userID
            country
            price
            state
            city
            phone
            createdTime
            createdAt
            updatedAt
            user {
              __typename
              items {
                __typename
                name
              }
            }
            category {
              __typename
              items {
                __typename
                name
              }
            }
            mode {
              __typename
              items {
                __typename
                name
              }
            }
            images {
              __typename
              items {
                __typename
                file {
                  __typename
                  key
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAdsHomeQuery>response.data.listAdvertisementss;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          profileImage {
            __typename
            items {
              __typename
              id
              name
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          profileImage {
            __typename
            items {
              __typename
              id
              name
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          profileImage {
            __typename
            items {
              __typename
              id
              name
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async CreateMode(
    input: CreateModeInput,
    condition?: ModelModeConditionInput
  ): Promise<CreateModeMutation> {
    const statement = `mutation CreateMode($input: CreateModeInput!, $condition: ModelModeConditionInput) {
        createMode(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateModeMutation>response.data.createMode;
  }
  async UpdateMode(
    input: UpdateModeInput,
    condition?: ModelModeConditionInput
  ): Promise<UpdateModeMutation> {
    const statement = `mutation UpdateMode($input: UpdateModeInput!, $condition: ModelModeConditionInput) {
        updateMode(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateModeMutation>response.data.updateMode;
  }
  async DeleteMode(
    input: DeleteModeInput,
    condition?: ModelModeConditionInput
  ): Promise<DeleteModeMutation> {
    const statement = `mutation DeleteMode($input: DeleteModeInput!, $condition: ModelModeConditionInput) {
        deleteMode(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteModeMutation>response.data.deleteMode;
  }
  async CreateAdvertisements(
    input: CreateAdvertisementsInput,
    condition?: ModelAdvertisementsConditionInput
  ): Promise<CreateAdvertisementsMutation> {
    const statement = `mutation CreateAdvertisements($input: CreateAdvertisementsInput!, $condition: ModelAdvertisementsConditionInput) {
        createAdvertisements(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          price
          modeID
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          mode {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
          images {
            __typename
            items {
              __typename
              id
              name
              adID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAdvertisementsMutation>response.data.createAdvertisements;
  }
  async UpdateAdvertisements(
    input: UpdateAdvertisementsInput,
    condition?: ModelAdvertisementsConditionInput
  ): Promise<UpdateAdvertisementsMutation> {
    const statement = `mutation UpdateAdvertisements($input: UpdateAdvertisementsInput!, $condition: ModelAdvertisementsConditionInput) {
        updateAdvertisements(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          price
          modeID
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          mode {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
          images {
            __typename
            items {
              __typename
              id
              name
              adID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAdvertisementsMutation>response.data.updateAdvertisements;
  }
  async DeleteAdvertisements(
    input: DeleteAdvertisementsInput,
    condition?: ModelAdvertisementsConditionInput
  ): Promise<DeleteAdvertisementsMutation> {
    const statement = `mutation DeleteAdvertisements($input: DeleteAdvertisementsInput!, $condition: ModelAdvertisementsConditionInput) {
        deleteAdvertisements(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          price
          modeID
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          mode {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
          images {
            __typename
            items {
              __typename
              id
              name
              adID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAdvertisementsMutation>response.data.deleteAdvertisements;
  }
  async CreatePicture(
    input: CreatePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<CreatePictureMutation> {
    const statement = `mutation CreatePicture($input: CreatePictureInput!, $condition: ModelPictureConditionInput) {
        createPicture(input: $input, condition: $condition) {
          __typename
          id
          name
          adID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          ad {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePictureMutation>response.data.createPicture;
  }
  async UpdatePicture(
    input: UpdatePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<UpdatePictureMutation> {
    const statement = `mutation UpdatePicture($input: UpdatePictureInput!, $condition: ModelPictureConditionInput) {
        updatePicture(input: $input, condition: $condition) {
          __typename
          id
          name
          adID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          ad {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePictureMutation>response.data.updatePicture;
  }
  async DeletePicture(
    input: DeletePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<DeletePictureMutation> {
    const statement = `mutation DeletePicture($input: DeletePictureInput!, $condition: ModelPictureConditionInput) {
        deletePicture(input: $input, condition: $condition) {
          __typename
          id
          name
          adID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          ad {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePictureMutation>response.data.deletePicture;
  }
  async CreateProfilePicture(
    input: CreateProfilePictureInput,
    condition?: ModelProfilePictureConditionInput
  ): Promise<CreateProfilePictureMutation> {
    const statement = `mutation CreateProfilePicture($input: CreateProfilePictureInput!, $condition: ModelProfilePictureConditionInput) {
        createProfilePicture(input: $input, condition: $condition) {
          __typename
          id
          name
          userID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProfilePictureMutation>response.data.createProfilePicture;
  }
  async UpdateProfilePicture(
    input: UpdateProfilePictureInput,
    condition?: ModelProfilePictureConditionInput
  ): Promise<UpdateProfilePictureMutation> {
    const statement = `mutation UpdateProfilePicture($input: UpdateProfilePictureInput!, $condition: ModelProfilePictureConditionInput) {
        updateProfilePicture(input: $input, condition: $condition) {
          __typename
          id
          name
          userID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProfilePictureMutation>response.data.updateProfilePicture;
  }
  async DeleteProfilePicture(
    input: DeleteProfilePictureInput,
    condition?: ModelProfilePictureConditionInput
  ): Promise<DeleteProfilePictureMutation> {
    const statement = `mutation DeleteProfilePicture($input: DeleteProfilePictureInput!, $condition: ModelProfilePictureConditionInput) {
        deleteProfilePicture(input: $input, condition: $condition) {
          __typename
          id
          name
          userID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProfilePictureMutation>response.data.deleteProfilePicture;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          profileImage {
            __typename
            items {
              __typename
              id
              name
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            address
            phone
            createdAt
            updatedAt
            owner
            ads {
              __typename
              nextToken
            }
            profileImage {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategorys(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategorysQuery> {
    const statement = `query ListCategorys($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            owner
            ads {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategorysQuery>response.data.listCategorys;
  }
  async GetMode(id: string): Promise<GetModeQuery> {
    const statement = `query GetMode($id: ID!) {
        getMode(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetModeQuery>response.data.getMode;
  }
  async ListModes(
    filter?: ModelModeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListModesQuery> {
    const statement = `query ListModes($filter: ModelModeFilterInput, $limit: Int, $nextToken: String) {
        listModes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            owner
            ads {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListModesQuery>response.data.listModes;
  }
  async GetAdvertisements(id: string): Promise<GetAdvertisementsQuery> {
    const statement = `query GetAdvertisements($id: ID!) {
        getAdvertisements(id: $id) {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          price
          modeID
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          mode {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
          images {
            __typename
            items {
              __typename
              id
              name
              adID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAdvertisementsQuery>response.data.getAdvertisements;
  }
  async ListAdvertisementss(
    filter?: ModelAdvertisementsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAdvertisementssQuery> {
    const statement = `query ListAdvertisementss($filter: ModelAdvertisementsFilterInput, $limit: Int, $nextToken: String) {
        listAdvertisementss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            categoryID
            userID
            country
            state
            city
            phone
            price
            modeID
            createdTime
            createdAt
            updatedAt
            user {
              __typename
              nextToken
            }
            category {
              __typename
              nextToken
            }
            mode {
              __typename
              nextToken
            }
            owner
            images {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAdvertisementssQuery>response.data.listAdvertisementss;
  }
  async GetPicture(id: string): Promise<GetPictureQuery> {
    const statement = `query GetPicture($id: ID!) {
        getPicture(id: $id) {
          __typename
          id
          name
          adID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          ad {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPictureQuery>response.data.getPicture;
  }
  async ListPictures(
    filter?: ModelPictureFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPicturesQuery> {
    const statement = `query ListPictures($filter: ModelPictureFilterInput, $limit: Int, $nextToken: String) {
        listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            adID
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            ad {
              __typename
              nextToken
            }
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPicturesQuery>response.data.listPictures;
  }
  async GetProfilePicture(id: string): Promise<GetProfilePictureQuery> {
    const statement = `query GetProfilePicture($id: ID!) {
        getProfilePicture(id: $id) {
          __typename
          id
          name
          userID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProfilePictureQuery>response.data.getProfilePicture;
  }
  async ListProfilePictures(
    filter?: ModelProfilePictureFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProfilePicturesQuery> {
    const statement = `query ListProfilePictures($filter: ModelProfilePictureFilterInput, $limit: Int, $nextToken: String) {
        listProfilePictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            userID
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            user {
              __typename
              nextToken
            }
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProfilePicturesQuery>response.data.listProfilePictures;
  }
  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          profileImage {
            __typename
            items {
              __typename
              id
              name
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          profileImage {
            __typename
            items {
              __typename
              id
              name
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          name
          email
          address
          phone
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          profileImage {
            __typename
            items {
              __typename
              id
              name
              userID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;

  OnCreateCategoryListener: Observable<
    SubscriptionResponse<OnCreateCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCategorySubscription>>;

  OnUpdateCategoryListener: Observable<
    SubscriptionResponse<OnUpdateCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCategorySubscription>>;

  OnDeleteCategoryListener: Observable<
    SubscriptionResponse<OnDeleteCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCategorySubscription>>;

  OnCreateModeListener: Observable<
    SubscriptionResponse<OnCreateModeSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMode {
        onCreateMode {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateModeSubscription>>;

  OnUpdateModeListener: Observable<
    SubscriptionResponse<OnUpdateModeSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMode {
        onUpdateMode {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateModeSubscription>>;

  OnDeleteModeListener: Observable<
    SubscriptionResponse<OnDeleteModeSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMode {
        onDeleteMode {
          __typename
          id
          name
          createdAt
          updatedAt
          owner
          ads {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteModeSubscription>>;

  OnCreateAdvertisementsListener: Observable<
    SubscriptionResponse<OnCreateAdvertisementsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAdvertisements {
        onCreateAdvertisements {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          price
          modeID
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          mode {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
          images {
            __typename
            items {
              __typename
              id
              name
              adID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAdvertisementsSubscription>>;

  OnUpdateAdvertisementsListener: Observable<
    SubscriptionResponse<OnUpdateAdvertisementsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAdvertisements {
        onUpdateAdvertisements {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          price
          modeID
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          mode {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
          images {
            __typename
            items {
              __typename
              id
              name
              adID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAdvertisementsSubscription>>;

  OnDeleteAdvertisementsListener: Observable<
    SubscriptionResponse<OnDeleteAdvertisementsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAdvertisements {
        onDeleteAdvertisements {
          __typename
          id
          title
          description
          categoryID
          userID
          country
          state
          city
          phone
          price
          modeID
          createdTime
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          category {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          mode {
            __typename
            items {
              __typename
              id
              name
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
          images {
            __typename
            items {
              __typename
              id
              name
              adID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAdvertisementsSubscription>>;

  OnCreatePictureListener: Observable<
    SubscriptionResponse<OnCreatePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePicture {
        onCreatePicture {
          __typename
          id
          name
          adID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          ad {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePictureSubscription>>;

  OnUpdatePictureListener: Observable<
    SubscriptionResponse<OnUpdatePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePicture {
        onUpdatePicture {
          __typename
          id
          name
          adID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          ad {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePictureSubscription>>;

  OnDeletePictureListener: Observable<
    SubscriptionResponse<OnDeletePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePicture {
        onDeletePicture {
          __typename
          id
          name
          adID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          ad {
            __typename
            items {
              __typename
              id
              title
              description
              categoryID
              userID
              country
              state
              city
              phone
              price
              modeID
              createdTime
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePictureSubscription>>;

  OnCreateProfilePictureListener: Observable<
    SubscriptionResponse<OnCreateProfilePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProfilePicture {
        onCreateProfilePicture {
          __typename
          id
          name
          userID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateProfilePictureSubscription>>;

  OnUpdateProfilePictureListener: Observable<
    SubscriptionResponse<OnUpdateProfilePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProfilePicture {
        onUpdateProfilePicture {
          __typename
          id
          name
          userID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateProfilePictureSubscription>>;

  OnDeleteProfilePictureListener: Observable<
    SubscriptionResponse<OnDeleteProfilePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProfilePicture {
        onDeleteProfilePicture {
          __typename
          id
          name
          userID
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          user {
            __typename
            items {
              __typename
              id
              name
              email
              address
              phone
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteProfilePictureSubscription>>;
}
