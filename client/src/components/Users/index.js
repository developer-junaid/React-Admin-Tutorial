import React from "react";

// React Admin
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  Edit,
  EmailField,
} from "react-admin";

// Components

// Create
export const UserCreate = (props) => {
  return (
    <Create title="Create a User" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};

// Edit
export const UserEdit = (props) => {
  return (
    <Edit title="Edit a User" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="email" type="email" />
      </SimpleForm>
    </Edit>
  );
};

// List
export const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};
