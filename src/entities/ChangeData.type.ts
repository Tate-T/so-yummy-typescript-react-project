export type ChangeBody = { name: string; avatar?: File } | { name?: string; avatar: File };

export type ChangeResp = {
  name: string;
  email: string;
  avatarURL: string;
};
