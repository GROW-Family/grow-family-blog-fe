/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

export const handleAddNode = (state: IPost, type: TypeNodeType): IPost => {
  const Id = `${new Date().getTime()}`;

  const team = { ...state };

  if (team?.Node && team.Node.length > 0) {
    team.Node = [
      ...team.Node,
      {
        Id,
        Type: type,
        Content: '',
        Index: team.Node.length + 1,
        ImageURL: '',
      },
    ];
  } else {
    team.Node = [
      {
        Id,
        Type: type,
        Content: '',
        Index: 1,
        ImageURL: '',
      },
    ];
  }

  return team;
};
