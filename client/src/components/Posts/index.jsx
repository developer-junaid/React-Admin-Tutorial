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
} from "react-admin";

// Components

// Create
export const PostCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};

// Edit
export const PostEdit = (props) => {
  return (
    <Edit title="Edit a Post" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};

// List
export const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="publishedAt" />
        <EditButton basePath="/posts" />
        <DeleteButton basePath="/posts" />
      </Datagrid>
    </List>
  );
};
