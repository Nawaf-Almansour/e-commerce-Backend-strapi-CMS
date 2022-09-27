
export default  {
  routes: [
    {
      method: 'GET',
      path: '/orders',
      handler: 'order.find',
      config: {
        "policies": [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/orders/:code',
      handler: 'order.findOne',
      config: {
        "policies": [],
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/orders',
      handler: 'order.create',
      config: {
        "policies": [],
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/orders/:code',
      handler: 'order.update',
      config: {
        "policies": [],
        auth: false,
      },
    },
    {
      method: 'DELETE',
      path: '/orders/:code',
      handler: 'order.delete',
      config: {
        "policies": [],
        auth: false,
      },
    },
  ],
};
