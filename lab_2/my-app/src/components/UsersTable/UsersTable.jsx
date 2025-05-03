import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_EditActionButtons
} from 'material-react-table';

import {
  Box, IconButton, Button,
  Tooltip, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
// import { createUser, getUsers, updateUser, deleteUser } from '../../database/CRUD';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import { rolesUser, stateBlockUser } from '../../database/data';
import {
  useUpdateUserMutation,
  useDeleteUserMutation, useCreateUserMutation,
  useGetUsersQuery
} from '../../features/api/usersAPI';


const UsersTable = () => {

  const [validationErrors, setValidationErrors] = useState({});
  // const [dataUsers, setDataUsers] = useState([])


  // call READ hook
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
    error: errorGetUser
  } = useGetUsersQuery();

  const [
    updateUser,
    {
      isPending: isUpdatingUser,
      error: errorUpdatingUser,
      isError: isUpdatingUserError,
    }
  ] = useUpdateUserMutation()


  const [
    createUser,
    { isPending: isCreatingUser }
  ] = useCreateUserMutation()

  // DELETE hook
  const [
    deleteUser,
    { isPending: isDeletingUser }
  ] = useDeleteUserMutation()

  const handleSaveUser = async ({ values, table }) => {
    // const newValidationErrors = validateUser(values)

    await updateUser(values)
    console.log(errorGetUser)
    // setUsersData
    // dataUsers.map((user) => user.email === values.email ? values : user)
    // setDataUsers([...dataUsers])

    table.setEditingRow(null)
  }

  const handleCreateUser = async ({
    values, table
  }) => {

    const newValidationErrors = validateUser(values)
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors)
      return
    }
    const result = await createUser(values)

    // fetchedUsers.push(result)
    // setDataUsers([...dataUsers])

    table.setCreatingRow(null)
  }

  const handleBlockUser = async (row) => {
    console.log(row.original)
    console.log(`Blocking user ${row.original.email}`)
    const newValueBlock = !row.original.isBlocked

    // await updateUser({ email: row.original.email, isBlocked: newValueBlock })

    const userData = row.original
    userData.isBlocked = newValueBlock
    // dataUsers.map((user) => user.email === row.original.email ? userData : user)
    // setDataUsers([...dataUsers])
  }

  const openDeleteConfirmModal = (row) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      console.log(row)
      deleteUser(row.original.id);

      // setDataUsers([...dataUsers.filter((user) => user.email !== row.original.email)])
    }
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        minSize: 50,
        size: 70,
        maxSize: 100,
        grow: false,
        enableEditing: false,

      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.firstName,
          helperText: validationErrors?.firstName,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              firstName: undefined,
            }),
        },
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.lastName,
          helperText: validationErrors?.lastName,
        },
        onFocus: () =>
          setValidationErrors({
            ...validationErrors,
            lastName: undefined
          }),
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'role',
        header: 'Role',
        editVariant: 'select',
        editSelectOptions: rolesUser,
        muiEditTextFieldProps: {
          error: !!validationErrors?.state,
          helperText: validationErrors?.state,
        }
      },
      {
        accessorKey: 'password',
        header: 'Password',
        muiEditTextFieldProps: {
          required: true,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
            }),
        },
      },
      {
        accessorKey: 'isBlocked',
        header: 'Block',
        editVariant: 'select',
        editSelectOptions: stateBlockUser,
        Cell: ({ cell }) => (
          <span>{cell.getValue() === true ? 'yes' : 'no'}</span>
        ),

      },
      {
        accessorKey: 'info',
        header: 'Info',
      },
      {
        accessorKey: 'responds',
        header: 'Respnods',
      }
    ],
    [validationErrors]
  );

  /* //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
  // const fetchMoreOnBottomReached = useCallback(
  //   (containerRefElement) => {
  //     if (containerRefElement) {
  //       const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
  //       //once the user has scrolled within 400px of the bottom of the table, fetch more data if we can
  //       if (
  //         scrollHeight - scrollTop - clientHeight < 400 &&
  //         !isFetching &&
  //         totalFetched < totalDBRowCount
  //       ) {
  //         fetchNextPage();
  //       }
  //     }
  //   },
  //   [fetchNextPage, isFetching, totalFetched, totalDBRowCount],
  // );*/

  // const isLoadingUsersError = !true;
  //  const isLoadingUsers = true;
  //const isFetchingUsers = true;
  // const isLoadingUsersError = true;

  const table = useMaterialReactTable({
    columns: columns,
    data: fetchedUsers,
    enableColumnOrdering: true,
    enableColumnPinning: true,
    enableRowActions: true,
    layoutMode: 'grid',
    enablePagination: false,
    enableRowVirtualization: true,
    getRowId: (row) => row.id,
    displayColumnDefOptions: {
      'mrt-row-actions': {
        size: 110,
        columnPinning: localStorage.getItem('isMobile'),
      }
    },
    muiToolbarAlertBannerProps: isUpdatingUserError
      ? {
        color: 'error',
        children: 'Error updating data',
      }
      : undefined,

    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,

    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: 'flex' }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Block">
          <IconButton color="error" onClick={() => handleBlockUser(row)}>
            <BlockIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Create New User</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {internalEditComponents}

          {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{ display: 'flex', gap: '1rem' }}>
        <Button
          variant="contained"
          onClick={() => {
            table.setCreatingRow(true);
          }}
        >
          Create New User
        </Button>
      </Box>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError || isUpdatingUserError,
      showProgressBars: isFetchingUsers,
    },
  });

  return <MaterialReactTable table={table} />;
};

const validateRequired = (value) => !!value.length

function validateUser(user) {
  return {
    firstName: !validateRequired(user.firstName)
      ? 'First Name is Req' : ''

  }
}

export default UsersTable;
