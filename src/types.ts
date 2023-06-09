export type AuthContextType = {
  user: any;
};

export type Props = { children: React.ReactNode };

export type sidebarItemProps = {
  title: string;
  imgSrc: string;
  className?: any;
};

export type cardProps = {
  title: string;
  img: string;
  value: string;
};

export type itemProp = {
  organization: string;
  phoneNumber: string;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
  };
};

export type positionProp = {
  position: {
    top: number;
    left: number;
  };
  id: string;
};


export type socialProp = {
  socials: {
    twitter: string;
    facebook: string;
    instagram?: string;
  };
};

export type filterProp = {
  filter: {
    date: string | number | readonly string[] | undefined;
    organization: string;
    phoneNumber: string;
    email: string;
    username: string;
    Date: string;
    status: string;
}
  handleFilterChange: (e: {
    target: {
        name: string;
        value: string;
    };
  }) => void;
  handleFilter: () => void;
  handleReset: () => void;
  data: never[];

};