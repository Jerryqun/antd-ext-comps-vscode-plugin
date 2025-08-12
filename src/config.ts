export const snippets = [
  {
    key: 'ext-t',
    content:
      `import { message } from 'antd';\n` +
      `import { TableProps } from 'antd-ext-comps';\n` +
      `import React from 'react';\n` +
      `import formSchema from './form';\n\n` +
      `const sleep = (time = 1000) =>\n` +
      `  new Promise((res) => {\n` +
      `    setTimeout(() => {\n` +
      `      res(null);\n` +
      `    }, time);\n` +
      `  });\n\n` +
      `const getDataList = (l = 18) => {\n` +
      `  const result: any = [];\n` +
      `  for (let i = 1; i <= l; i++) {\n` +
      `    if (i === 1) {\n` +
      `      result.push({\n` +
      `        classify: \`职业\${i}\`,\n` +
      `        score: 79,\n` +
      `        city: \`湖南长沙\${i}\`,\n` +
      `        sex: 1,\n` +
      `        sign: \`签名\${i}\`,\n` +
      `        index: i,\n` +
      `        id: i,\n` +
      `        logins: 99,\n` +
      `        username: \`用户姓名\`,\n` +
      `      });\n` +
      `    } else {\n` +
      `      result.push({\n` +
      `        classify: \`职业\${i}\`,\n` +
      `        score: 79,\n` +
      `        city: \`湖南长沙\${i}\`,\n` +
      `        sex: 2,\n` +
      `        sign: \`签名\${i}\`,\n` +
      `        index: i,\n` +
      `        id: i,\n` +
      `        logins: 99,\n` +
      `        username: \`用户姓名\${i}\`,\n` +
      `      });\n` +
      `    }\n` +
      `  }\n` +
      `  return result;\n` +
      `};\n\n` +
      `interface User {\n` +
      `  classify: string;\n` +
      `  score: number;\n` +
      `  city: string;\n` +
      `  sex: number;\n` +
      `  sign: string;\n` +
      `  index: number;\n` +
      `  id: number;\n` +
      `  logins: number;\n` +
      `  username: string;\n` +
      `}\n\n` +
      `class UserService {\n` +
      `  private users: User[];\n` +
      `  private currentId: number = 1;\n\n` +
      `  constructor(length: number = 18) {\n` +
      `    this.users = getDataList(length);\n` +
      `  }\n\n` +
      `  createUser(user: Omit<User, 'id'>): User {\n` +
      `    const newUser = { ...user, id: this.currentId++ };\n` +
      `    this.users.push(newUser);\n` +
      `    return newUser;\n` +
      `  }\n\n` +
      `  deleteUser(id: number): boolean {\n` +
      `    const index = this.users.findIndex((user) => user.id === id);\n` +
      `    if (index !== -1) {\n` +
      `      this.users.splice(index, 1);\n` +
      `      return true;\n` +
      `    }\n` +
      `    return false;\n` +
      `  }\n\n` +
      `  updateUser(id: number, updatedUser: Partial<Omit<User, 'id'>>): User | null {\n` +
      `    const user = this.users.find((user) => user.id === id);\n` +
      `    if (user) {\n` +
      `      Object.assign(user, updatedUser);\n` +
      `      return user;\n` +
      `    }\n` +
      `    return null;\n` +
      `  }\n\n` +
      `  getUsers(\n` +
      `    { pageNum, pageSize = 10 }: { pageNum: number; pageSize: number },\n` +
      `    page = true,\n` +
      `  ): {\n` +
      `    data: User[];\n` +
      `    total: number;\n` +
      `    code: number;\n` +
      `  } {\n` +
      `    const startIndex = (pageNum - 1) * pageSize;\n` +
      `    const endIndex = startIndex + pageSize;\n` +
      `    const paginatedUsers = this.users.slice(startIndex, endIndex);\n` +
      `    const total = this.users.length;\n` +
      `    return { data: page ? paginatedUsers : this.users, total, code: 200 };\n` +
      `  }\n` +
      `}\n\n` +
      `const service = new UserService();\n\n` +
      `const delay = (ms: number) =>\n` +
      `  new Promise((res) => {\n` +
      `    setTimeout(res, ms, true);\n` +
      `  });\n\n` +
      `const tableSchema: TableProps = {\n` +
      `  rowKey: 'id',\n` +
      `  title: '用户列表',\n` +
      `  infoContent: <div>客户签名总数：1244555；平均分数：58分</div>,\n` +
      `  request: async (params) => {\n` +
      `    await sleep(1500);\n` +
      `    const { code, data, total } = service.getUsers(params);\n` +
      `    return {\n` +
      `      total,\n` +
      `      isError: code !== 200,\n` +
      `      list: data,\n` +
      `    };\n` +
      `  },\n` +
      `  scroll: { x: 1200 },\n` +
      `  tools: [\n` +
      `    {\n` +
      `      label: '新增',\n` +
      `      key: 'add1',\n` +
      `      modalFormProps: ({ onSearch }) => ({\n` +
      `        title: '新增用户',\n` +
      `        fields: formSchema,\n` +
      `        drag: true,\n` +
      `        async onSubmit() {\n` +
      `          await delay(400);\n` +
      `          message.success('保存成功');\n` +
      `          onSearch();\n` +
      `        },\n` +
      `      }),\n` +
      `    },\n` +
      `    {\n` +
      `      label: '添加2',\n` +
      `      key: 'add2',\n` +
      `      drawerFormProps: ({ onSearch }) => ({\n` +
      `        title: '新增用户2',\n` +
      `        fields: formSchema,\n` +
      `        drag: true,\n` +
      `        column: 2,\n` +
      `        async onSubmit() {\n` +
      `          await delay(400);\n` +
      `          message.success('保存成功');\n` +
      `          onSearch();\n` +
      `        },\n` +
      `      }),\n` +
      `    },\n` +
      `    {\n` +
      `      type: 'Dropdown',\n` +
      `      label: '更多操作',\n` +
      `      menu: [\n` +
      `        {\n` +
      `          key: 'action_1',\n` +
      `          label: '更多操作1',\n` +
      `        },\n` +
      `        {\n` +
      `          type: 'Divider',\n` +
      `          key: 'split',\n` +
      `        },\n` +
      `        {\n` +
      `          key: 'action_2',\n` +
      `          label: '更多操作2',\n` +
      `        },\n` +
      `        {\n` +
      `          key: 'action_3',\n` +
      `          label: '更多操作3',\n` +
      `        },\n` +
      `      ],\n` +
      `    },\n` +
      `    {\n` +
      `      type: 'Refresh',\n` +
      `    },\n` +
      `    {\n` +
      `      type: 'FilterColumns',\n` +
      `    },\n` +
      `  ],\n` +
      `  columns: [\n` +
      `    {\n` +
      `      title: () => <div>ID</div>,\n` +
      `      dataIndex: 'id',\n` +
      `      width: 100,\n` +
      `      fixed: 'left',\n` +
      `      ellipsis: true,\n` +
      `    },\n` +
      `    {\n` +
      `      title: '客户姓名',\n` +
      `      ellipsis: true,\n` +
      `      dataIndex: 'username',\n` +
      `      width: 150,\n` +
      `      resize: true,\n` +
      `    },\n` +
      `    {\n` +
      `      title: '性别',\n` +
      `      ellipsis: true,\n` +
      `      dataIndex: 'sex',\n` +
      `      width: 150,\n` +
      `      enumsConf: {\n` +
      `        isArr: true,\n` +
      `      },\n` +
      `      enums: [\n` +
      `        {\n` +
      `          label: '男',\n` +
      `          value: 1,\n` +
      `        },\n` +
      `        {\n` +
      `          label: '女',\n` +
      `          value: 2,\n` +
      `        },\n` +
      `      ],\n` +
      `    },\n` +
      `    {\n` +
      `      title: '城市',\n` +
      `      ellipsis: true,\n` +
      `      dataIndex: 'city',\n` +
      `      width: 150,\n` +
      `    },\n` +
      `    {\n` +
      `      title: '签名',\n` +
      `      ellipsis: true,\n` +
      `      dataIndex: 'sign',\n` +
      `      width: 120,\n` +
      `    },\n` +
      `    {\n` +
      `      title: '职业',\n` +
      `      ellipsis: true,\n` +
      `      dataIndex: 'classify',\n` +
      `      width: 120,\n` +
      `    },\n` +
      `    {\n` +
      `      title: '分数',\n` +
      `      ellipsis: true,\n` +
      `      dataIndex: 'score',\n` +
      `      width: 100,\n` +
      `      sorter: true,\n` +
      `    },\n` +
      `    {\n` +
      `      title: '登录次数',\n` +
      `      ellipsis: true,\n` +
      `      dataIndex: 'logins',\n` +
      `      width: 100,\n` +
      `      sorter: true,\n` +
      `    },\n` +
      `  ],\n` +
      `  rowOperations: {\n` +
      `    title: '操作',\n` +
      `    ellipsis: true,\n` +
      `    width: 200,\n` +
      `    showMore: 4,\n` +
      `    fixed: 'right',\n` +
      `    menus(record) {\n` +
      `      return [\n` +
      `        {\n` +
      `          label: '编辑1',\n` +
      `          key: 'edit1',\n` +
      `          modalFormProps: ({ onRefresh }) => ({\n` +
      `            initialValues: record,\n` +
      `            title: '编辑用户1',\n` +
      `            fields: formSchema,\n` +
      `            async onSubmit() {\n` +
      `              await delay(400);\n` +
      `              message.success('保存成功');\n` +
      `              onRefresh();\n` +
      `            },\n` +
      `          }),\n` +
      `        },\n` +
      `        {\n` +
      `          label: '编辑2',\n` +
      `          key: 'edit2',\n` +
      `          drawerFormProps: ({ onRefresh }) => ({\n` +
      `            title: '编辑用户2',\n` +
      `            initialValues: record,\n` +
      `            fields: formSchema,\n` +
      `            async onSubmit() {\n` +
      `              await delay(400);\n` +
      `              message.success('保存成功');\n` +
      `              onRefresh();\n` +
      `            },\n` +
      `          }),\n` +
      `        },\n` +
      `        {\n` +
      `          label: '删除',\n` +
      `          key: 'remove',\n` +
      `          confirm: {\n` +
      `            content: '是否确定删除',\n` +
      `          },\n` +
      `          onClick: async ({ onSearch }) => {\n` +
      `            await new Promise((res) => {\n` +
      `              setTimeout(res, 1000);\n` +
      `            });\n` +
      `            message.success('已删除');\n` +
      `            onSearch();\n` +
      `          },\n` +
      `        },\n` +
      `      ];\n` +
      `    },\n` +
      `  },\n` +
      `};\n\n` +
      `export default tableSchema;`
  },
  {
    key: 'ext-f',
    content:
      `import { FormFieldProps } from 'antd-ext-comps';\n\n` +
      `const fields: FormFieldProps[] = [\n` +
      `  {\n` +
      `    type: 'Input',\n` +
      `    name: 'username',\n` +
      `    label: '名称',\n` +
      `    required: true,\n` +
      `  },\n` +
      `  {\n` +
      `    type: 'Select',\n` +
      `    name: 'sex',\n` +
      `    label: '性别',\n` +
      `    required: true,\n` +
      `    props: {\n` +
      `      options: [\n` +
      `        { label: '男', value: 1 },\n` +
      `        { label: '女', value: 2 },\n` +
      `      ],\n` +
      `    },\n` +
      `  },\n` +
      `  {\n` +
      `    type: 'Input',\n` +
      `    name: 'city',\n` +
      `    label: '城市',\n` +
      `    required: true,\n` +
      `  },\n` +
      `  {\n` +
      `    type: 'RangePicker',\n` +
      `    name: 'date',\n` +
      `    label: '就读时间',\n` +
      `    required: true,\n` +
      `    nameAlise: ['startTime', 'endTime'],\n` +
      `  },\n` +
      `];\n\n` +
      `export default fields;`
  },
  {
    key: 'ext-s', // 搜索配置
    content:
      `import { FormFieldProps } from 'antd-ext-comps';\n\n` +
      `const searchSchema: FormFieldProps[] = [\n` +
      `  {\n` +
      `    type: 'Select',\n` +
      `    name: 'type',\n` +
      `    label: '类型',\n` +
      `    props: {\n` +
      `      options: [\n` +
      `        { label: '选项1', value: 'value1' },\n` +
      `        { label: '选项2', value: 'value2' },\n` +
      `      ],\n` +
      `    },\n` +
      `  }\n` +
      `];\n\n` +
      `export default { fields: searchSchema };`
  },
  {
    key: 'ext-i', // 入口文件
    content:
      `import { TableProvider } from 'antd-ext-comps';\n` +
      `import React from 'react';\n` +
      `import searchSchema from './search';\n` +
      `import tableSchema from './table';\n\n` +
      `export default () => {\n` +
      `  return (\n` +
      `    <TableProvider\n` +
      `      cacheTableParams\n` +
      `      cacheTableParamsId="yhlb"\n` +
      `    >\n` +
      `      <TableProvider.Search {...searchSchema} />\n` +
      `      <TableProvider.Table {...tableSchema} />\n` +
      `    </TableProvider>\n` +
      `  );\n` +
      `};`
  }
];