export const insomniaJSON = {
  _type: "export",
  __export_format: 4,
  __export_date: "2023-10-17T16:41:03.691Z",
  __export_source: "insomnia.desktop.app:v2023.5.8",
  resources: [
    {
      _id: "req_d2ed61378faa433bb961793364dc5e33",
      parentId: "fld_77dda547b74d4b5c9fa70129b52ca4e8",
      modified: 1697560273835,
      created: 1697219843719,
      url: "{{ _.url }}/users",
      name: "usersShow",
      description: "",
      method: "GET",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_cac4c6ea67214f3abad7a10a4358edda",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219843719,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "fld_77dda547b74d4b5c9fa70129b52ca4e8",
      parentId: "wrk_dc92063282dc41af90a7b6d2ccb1851c",
      modified: 1697219841423,
      created: 1697219841423,
      name: "users",
      description: "",
      environment: {},
      environmentPropertyOrder: null,
      metaSortKey: -1697219841423,
      _type: "request_group",
    },
    {
      _id: "wrk_dc92063282dc41af90a7b6d2ccb1851c",
      parentId: null,
      modified: 1697219302204,
      created: 1697219302204,
      name: "engagement",
      description: "",
      scope: "collection",
      _type: "workspace",
    },
    {
      _id: "req_02838d37abd7468f838f95ce5c188faa",
      parentId: "fld_77dda547b74d4b5c9fa70129b52ca4e8",
      modified: 1697560275852,
      created: 1697220099818,
      url: "{{ _.url }}/users/{{ _.userId }}",
      name: "usersFind",
      description: "",
      method: "GET",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
          disabled: true,
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
          disabled: true,
        },
      ],
      headers: [
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_371f97dd2a404132b1348b999768aa2f",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219715729.25,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_5158a38634c840f8b50f6721aac80ff1",
      parentId: "fld_77dda547b74d4b5c9fa70129b52ca4e8",
      modified: 1697560277863,
      created: 1697395602032,
      url: "{{ _.url }}/users/find/token",
      name: "usersFindByToken",
      description: "",
      method: "GET",
      body: {},
      parameters: [
        {
          id: "pair_979abc4fbcba4eb59cfa197bacc0f079",
          name: "token",
          value: "$2b$10$l.6HQCebaMNRwV0G3zKQJeuufk9S8h1YdhCEBG0h.sd.Irk0uvCi6",
          description: "",
          disabled: false,
        },
      ],
      headers: [
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_720fecff7d6845d981e36c335504afbc",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219683731.8125,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_f202d14c0b5543d5ba650092004b453a",
      parentId: "fld_77dda547b74d4b5c9fa70129b52ca4e8",
      modified: 1697560281308,
      created: 1697220242085,
      url: "{{ _.url }}/users/{{ _.userId }}",
      name: "usersUpdate",
      description: "",
      method: "PATCH",
      body: { mimeType: "application/json", text: "{\n\t\n}" },
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
          disabled: true,
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
          disabled: true,
        },
      ],
      headers: [
        {
          name: "Content-Type",
          value: "application/json",
          id: "pair_95f5bd366c164132b826fdfca8b042d7",
        },
        
      ],
      authentication: {},
      metaSortKey: -1697219651734.375,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_71be0c7f96b046a0bf969b3c37b131d4",
      parentId: "fld_77dda547b74d4b5c9fa70129b52ca4e8",
      modified: 1697560270359,
      created: 1697220280296,
      url: "{{ _.url }}/users/{{ _.userId }}",
      name: "usersDelete",
      description: "",
      method: "DELETE",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_2ee6ecec7c6449ddaa85d1491e398da7",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219619736.9375,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_e753c68cf2d646ba8d3edbf9f4b35a82",
      parentId: "fld_77dda547b74d4b5c9fa70129b52ca4e8",
      modified: 1697560294841,
      created: 1697220004956,
      url: "{{ _.url }}/users",
      name: "usersCreate",
      description: "",
      method: "POST",
      body: { mimeType: "application/json", text: "{\n\t\n}" },
      parameters: [],
      headers: [
        {
          name: "Content-Type",
          value: "application/json",
          id: "pair_cb6a710d5c8c45418ed3c7b697a9e2f0",
        },
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_d3ce8690475f4b14bb2c5d0aa21c69f1",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219587739.5,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_e315b90f46ae4cf8a26dbd72358e79c3",
      parentId: "fld_1aa16cd8c0134f3bb949f9fbcd621f14",
      modified: 1697560798222,
      created: 1697393040501,
      url: "{{ _.url }}/categories/{{ _.categoryId }}/questions/{{ _.questionId }}/results",
      name: "resultsShow",
      description: "",
      method: "GET",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [{ name: "User-Agent", value: "insomnia/2023.5.8" }],
      authentication: {},
      metaSortKey: -1697219843719,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "fld_1aa16cd8c0134f3bb949f9fbcd621f14",
      parentId: "fld_6e106b15702c4eba8c82d077acd0a9a6",
      modified: 1697393053398,
      created: 1697393040499,
      name: "results",
      description: "",
      environment: {},
      environmentPropertyOrder: null,
      metaSortKey: -1697219843819,
      _type: "request_group",
    },
    {
      _id: "fld_6e106b15702c4eba8c82d077acd0a9a6",
      parentId: "fld_a28404ed547b4edf860b59badcd1cd12",
      modified: 1697221050216,
      created: 1697221042047,
      name: "questions",
      description: "",
      environment: {},
      environmentPropertyOrder: null,
      metaSortKey: -1697219843819,
      _type: "request_group",
    },
    {
      _id: "fld_a28404ed547b4edf860b59badcd1cd12",
      parentId: "wrk_dc92063282dc41af90a7b6d2ccb1851c",
      modified: 1697220506671,
      created: 1697220506671,
      name: "categories",
      description: "",
      environment: {},
      environmentPropertyOrder: null,
      metaSortKey: -1696950415117.5,
      _type: "request_group",
    },
    {
      _id: "req_faaae4e0c78041d29436c49f1347f20d",
      parentId: "fld_1aa16cd8c0134f3bb949f9fbcd621f14",
      modified: 1697560804709,
      created: 1697393040509,
      url: "{{ _.url }}/categories/{{ _.categoryId }}/questions/{{ _.questionId }}/results/{{ _.resultId }}",
      name: "resultsFind",
      description: "",
      method: "GET",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [{ name: "User-Agent", value: "insomnia/2023.5.8" }],
      authentication: {},
      metaSortKey: -1697219715729.25,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_353652279003414c9b12ddc60775b0fa",
      parentId: "fld_1aa16cd8c0134f3bb949f9fbcd621f14",
      modified: 1697560836548,
      created: 1697393040512,
      url: "{{ _.url }}/categories/{{ _.categoryId }}/questions/{{ _.questionId }}/results/{{ _.resultId }}",
      name: "resultsUpdate",
      description: "",
      method: "PATCH",
      body: { mimeType: "application/json", text: "{\n\t\n}" },
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [
        { name: "Content-Type", value: "application/json" },
        { name: "User-Agent", value: "insomnia/2023.5.8" },
      ],
      authentication: {},
      metaSortKey: -1697219651734.375,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_9172ea119029442eb22873d19ec988b1",
      parentId: "fld_1aa16cd8c0134f3bb949f9fbcd621f14",
      modified: 1697560817412,
      created: 1697393040515,
      url: "{{ _.url }}/categories/{{ _.categoryId }}/questions/{{ _.questionId }}/results/{{ _.resultId }}",
      name: "resultsDelete",
      description: "",
      method: "DELETE",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [{ name: "User-Agent", value: "insomnia/2023.5.8" }],
      authentication: {},
      metaSortKey: -1697219619736.9375,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_001fc96762cb499ba4c2926977c38762",
      parentId: "fld_1aa16cd8c0134f3bb949f9fbcd621f14",
      modified: 1697560822553,
      created: 1697393040506,
      url: "{{ _.url }}/categories/{{ _.categoryId }}/questions/{{ _.questionId }}/results",
      name: "resultsCreate",
      description: "",
      method: "POST",
      body: { mimeType: "application/json", text: "{\n\t\n}" },
      parameters: [],
      headers: [
        { name: "Content-Type", value: "application/json" },
        { name: "User-Agent", value: "insomnia/2023.5.8" },
      ],
      authentication: {},
      metaSortKey: -1697219587739.5,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_80f3aea856cc4239b31594acc11f0635",
      parentId: "fld_6e106b15702c4eba8c82d077acd0a9a6",
      modified: 1697560530306,
      created: 1697221042051,
      url: "{{ _.url }}/categories/{{ _.categoryId }}/questions",
      name: "questionsShow",
      description: "",
      method: "GET",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "100",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [{ name: "User-Agent", value: "insomnia/2023.5.8" }],
      authentication: {},
      metaSortKey: -1697219843719,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_7759725b52154d879db04731bd8ca7f8",
      parentId: "fld_6e106b15702c4eba8c82d077acd0a9a6",
      modified: 1697560591454,
      created: 1697221042065,
      url: "{{ _.url }}/categories/{{ _.categoryId }}/questions/{{ _.questionId }}",
      name: "questionsFind",
      description: "",
      method: "GET",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [{ name: "User-Agent", value: "insomnia/2023.5.8" }],
      authentication: {},
      metaSortKey: -1697219715729.25,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_176a4fd1907848aeb6f4499a951c7857",
      parentId: "fld_6e106b15702c4eba8c82d077acd0a9a6",
      modified: 1697560601045,
      created: 1697221042069,
      url: "{{ _.url }}/categories/{{ _.categoryId }}/questions/{{ _.questionId }}",
      name: "questionsUpdate",
      description: "",
      method: "PATCH",
      body: { mimeType: "application/json", text: "{\n\t\n}" },
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [
        { name: "Content-Type", value: "application/json" },
        { name: "User-Agent", value: "insomnia/2023.5.8" },
      ],
      authentication: {},
      metaSortKey: -1697219651734.375,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_616ab69f23c343d0a42a3347f53d7c84",
      parentId: "fld_6e106b15702c4eba8c82d077acd0a9a6",
      modified: 1697560605764,
      created: 1697221042074,
      url: "{{ _.url }}/categories/{{ _.categoryId }}/questions/{{ _.questionId }}",
      name: "questionsDelete",
      description: "",
      method: "DELETE",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [{ name: "User-Agent", value: "insomnia/2023.5.8" }],
      authentication: {},
      metaSortKey: -1697219619736.9375,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_8c7c6529cc174ba592fb3791b6e2c61c",
      parentId: "fld_6e106b15702c4eba8c82d077acd0a9a6",
      modified: 1697560552936,
      created: 1697221042060,
      url: "{{ _.url }}/categories/{{ _.categoryId }}/questions",
      name: "questionsCreate",
      description: "",
      method: "POST",
      body: { mimeType: "application/json", text: "{\n\n}" },
      parameters: [],
      headers: [
        { name: "Content-Type", value: "application/json" },
        { name: "User-Agent", value: "insomnia/2023.5.8" },
      ],
      authentication: {},
      metaSortKey: -1697219587739.5,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_0c4993bf6c5c42ad9e9671cdcf815588",
      parentId: "fld_a28404ed547b4edf860b59badcd1cd12",
      modified: 1697560382721,
      created: 1697220506674,
      url: "{{ _.url }}/categories",
      name: "categoriesShow",
      description: "",
      method: "GET",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "100",
          description: "",
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
        },
      ],
      headers: [
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_5c6d4f6214ba4b52b76fefc0f41c138d",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219843719,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_d124325c845049b09cbec75e14f46105",
      parentId: "fld_a28404ed547b4edf860b59badcd1cd12",
      modified: 1697560394024,
      created: 1697407332580,
      url: "{{ _.url }}/categories",
      name: "categoriesShowByUser",
      description: "",
      method: "GET",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "100",
          description: "",
          disabled: true,
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
          disabled: true,
        },
        {
          id: "pair_38d54ff46e6c4c6c9466637e3f0b3a1e",
          name: "token",
          value: "$2b$10$MK51TXU0yswSMqQUTiwBS.PJcAZnI2R1euGll/Dv8.mv3JuqRRgNi",
          description: "",
          disabled: false,
        },
        {
          id: "pair_7b7212228e844477b4b74347a6d50464",
          name: "token",
          value: "$2b$10$l.6HQCebaMNRwV0G3zKQJeuufk9S8h1YdhCEBG0h.sd.Irk0uvCi6",
          description: "",
          disabled: true,
        },
      ],
      headers: [
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_1482196fc24a4b4d9053e038da18c462",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219779724.125,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_b28868d0973047aaa8229a5bd81f3c41",
      parentId: "fld_a28404ed547b4edf860b59badcd1cd12",
      modified: 1697560424100,
      created: 1697220506691,
      url: "{{ _.url }}/categories/{{ _.categoryId }}",
      name: "categoriesFind",
      description: "",
      method: "GET",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
          disabled: true,
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
          disabled: true,
        },
      ],
      headers: [
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_c95e159dc8714883b932f7bdc1171cb0",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219715729.25,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_8c9511334c944a53ae4d0a4cb13dfdd9",
      parentId: "fld_a28404ed547b4edf860b59badcd1cd12",
      modified: 1697560439654,
      created: 1697220506697,
      url: "{{ _.url }}/categories/{{ _.categoryId }}",
      name: "categoriesUpdate",
      description: "",
      method: "PATCH",
      body: { mimeType: "application/json", text: "{\n\t\n}" },
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
          disabled: true,
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
          disabled: true,
        },
      ],
      headers: [
        {
          name: "Content-Type",
          value: "application/json",
          id: "pair_bc51ae29671c41da9ee9aef39d5602e3",
        },
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_50bb1bfdb62347ef96ef5d6bac287847",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219651734.375,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_9cd9cbddb9c64357a164ad22580aee83",
      parentId: "fld_a28404ed547b4edf860b59badcd1cd12",
      modified: 1697560449841,
      created: 1697220506701,
      url: "{{ _.url }}/categories/{{ _.categoryId }}",
      name: "categoriesDelete",
      description: "",
      method: "DELETE",
      body: {},
      parameters: [
        {
          id: "pair_66e39a75bdde48eba60009bb9b21b15f",
          name: "limit",
          value: "10",
          description: "",
          disabled: true,
        },
        {
          id: "pair_4961b9db8a084fe6af014c8d5e5bcc4c",
          name: "page",
          value: "1",
          description: "",
          disabled: true,
        },
      ],
      headers: [
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_979811c13ae04935887067eedef29b02",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219619736.9375,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "req_e33a9aaa52584627b0766f36c35a5d8d",
      parentId: "fld_a28404ed547b4edf860b59badcd1cd12",
      modified: 1697560463086,
      created: 1697220506682,
      url: "{{ _.url }}/categories",
      name: "categoriesCreate",
      description: "",
      method: "POST",
      body: { mimeType: "application/json", text: "{\n\n}" },
      parameters: [],
      headers: [
        {
          name: "Content-Type",
          value: "application/json",
          id: "pair_b34f3390747146ed8da132624ef0ec87",
        },
        {
          name: "User-Agent",
          value: "insomnia/2023.5.8",
          id: "pair_a114d2e47a1b493884360ce0ce7b6a22",
          disabled: true,
        },
      ],
      authentication: {},
      metaSortKey: -1697219587739.5,
      isPrivate: false,
      settingStoreCookies: true,
      settingSendCookies: true,
      settingDisableRenderRequestBody: false,
      settingEncodeUrl: true,
      settingRebuildPath: true,
      settingFollowRedirects: "global",
      _type: "request",
    },
    {
      _id: "env_75cbc21fcc78eb9ee70ab4a5a9da200b66750aac",
      parentId: "wrk_dc92063282dc41af90a7b6d2ccb1851c",
      modified: 1697560745441,
      created: 1697219302279,
      name: "Base Environment",
      data: {
        url: "http://localhost:8090",
        userId: 1,
        categoryId: 1,
        questionId: 1,
        resultId: 1,
      },
      dataPropertyOrder: {
        "&": ["url", "userId", "categoryId", "questionId", "resultId"],
      },
      color: null,
      isPrivate: false,
      metaSortKey: 1697219302279,
      _type: "environment",
    },
    {
      _id: "jar_75cbc21fcc78eb9ee70ab4a5a9da200b66750aac",
      parentId: "wrk_dc92063282dc41af90a7b6d2ccb1851c",
      modified: 1697219302285,
      created: 1697219302285,
      name: "Default Jar",
      cookies: [],
      _type: "cookie_jar",
    },
    {
      _id: "env_24c749ed16c8407b8acabce55a440850",
      parentId: "env_75cbc21fcc78eb9ee70ab4a5a9da200b66750aac",
      modified: 1697397122038,
      created: 1697396953514,
      name: "vercel",
      data: { url: "https://engagement-continental.vercel.app" },
      dataPropertyOrder: { "&": ["url"] },
      color: null,
      isPrivate: false,
      metaSortKey: 1697396953514,
      _type: "environment",
    },
  ],
};