export const generateHome= (data)=>{
  const newItem= data.address;
  return (<li>{`${newItem.addressId} ${newItem.streetAddress}, ${newItem.city}, ${newItem.state} ${newItem.zipcode}`}</li>);
}

export const generateMember= (data)=>{
  return (<li>{`${data.firstName} ${data.lastName}`}</li>);
}