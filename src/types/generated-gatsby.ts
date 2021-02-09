export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpResolutionsBase64 = 'childrenImageSharp___resolutions___base64',
  ChildrenImageSharpResolutionsTracedSvg = 'childrenImageSharp___resolutions___tracedSVG',
  ChildrenImageSharpResolutionsAspectRatio = 'childrenImageSharp___resolutions___aspectRatio',
  ChildrenImageSharpResolutionsWidth = 'childrenImageSharp___resolutions___width',
  ChildrenImageSharpResolutionsHeight = 'childrenImageSharp___resolutions___height',
  ChildrenImageSharpResolutionsSrc = 'childrenImageSharp___resolutions___src',
  ChildrenImageSharpResolutionsSrcSet = 'childrenImageSharp___resolutions___srcSet',
  ChildrenImageSharpResolutionsSrcWebp = 'childrenImageSharp___resolutions___srcWebp',
  ChildrenImageSharpResolutionsSrcSetWebp = 'childrenImageSharp___resolutions___srcSetWebp',
  ChildrenImageSharpResolutionsOriginalName = 'childrenImageSharp___resolutions___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpSizesBase64 = 'childrenImageSharp___sizes___base64',
  ChildrenImageSharpSizesTracedSvg = 'childrenImageSharp___sizes___tracedSVG',
  ChildrenImageSharpSizesAspectRatio = 'childrenImageSharp___sizes___aspectRatio',
  ChildrenImageSharpSizesSrc = 'childrenImageSharp___sizes___src',
  ChildrenImageSharpSizesSrcSet = 'childrenImageSharp___sizes___srcSet',
  ChildrenImageSharpSizesSrcWebp = 'childrenImageSharp___sizes___srcWebp',
  ChildrenImageSharpSizesSrcSetWebp = 'childrenImageSharp___sizes___srcSetWebp',
  ChildrenImageSharpSizesSizes = 'childrenImageSharp___sizes___sizes',
  ChildrenImageSharpSizesOriginalImg = 'childrenImageSharp___sizes___originalImg',
  ChildrenImageSharpSizesOriginalName = 'childrenImageSharp___sizes___originalName',
  ChildrenImageSharpSizesPresentationWidth = 'childrenImageSharp___sizes___presentationWidth',
  ChildrenImageSharpSizesPresentationHeight = 'childrenImageSharp___sizes___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  __typename?: 'Mdx';
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
  __typename?: 'MdxConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: 'MdxEdge';
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  Slug = 'slug',
  Body = 'body',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  MdxAst = 'mdxAST',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter';
  title: Scalars['String'];
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx';
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: 'MdxWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  wpContentNode?: Maybe<WpContentNode>;
  allWpContentNode: WpContentNodeConnection;
  wpTermNode?: Maybe<WpTermNode>;
  allWpTermNode: WpTermNodeConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  wpContentType?: Maybe<WpContentType>;
  allWpContentType: WpContentTypeConnection;
  wpTaxonomy?: Maybe<WpTaxonomy>;
  allWpTaxonomy: WpTaxonomyConnection;
  wpUser?: Maybe<WpUser>;
  allWpUser: WpUserConnection;
  wpComment?: Maybe<WpComment>;
  allWpComment: WpCommentConnection;
  wpMediaItem?: Maybe<WpMediaItem>;
  allWpMediaItem: WpMediaItemConnection;
  wpPage?: Maybe<WpPage>;
  allWpPage: WpPageConnection;
  wpPost?: Maybe<WpPost>;
  allWpPost: WpPostConnection;
  wpCategory?: Maybe<WpCategory>;
  allWpCategory: WpCategoryConnection;
  wpPostFormat?: Maybe<WpPostFormat>;
  allWpPostFormat: WpPostFormatConnection;
  wpTag?: Maybe<WpTag>;
  allWpTag: WpTagConnection;
  wpUserRole?: Maybe<WpUserRole>;
  allWpUserRole: WpUserRoleConnection;
  wpMenu?: Maybe<WpMenu>;
  allWpMenu: WpMenuConnection;
  wpMenuItem?: Maybe<WpMenuItem>;
  allWpMenuItem: WpMenuItemConnection;
  wp?: Maybe<Wp>;
  allWp: WpConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryWpContentNodeArgs = {
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWpContentNodeArgs = {
  filter?: Maybe<WpContentNodeFilterInput>;
  sort?: Maybe<WpContentNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTermNodeArgs = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllWpTermNodeArgs = {
  filter?: Maybe<WpTermNodeFilterInput>;
  sort?: Maybe<WpTermNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpContentTypeArgs = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  canExport?: Maybe<BooleanQueryOperatorInput>;
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: Maybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  excludeFromSearch?: Maybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hasArchive?: Maybe<BooleanQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  labels?: Maybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: Maybe<StringQueryOperatorInput>;
  menuPosition?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showInAdminBar?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpContentTypeArgs = {
  filter?: Maybe<WpContentTypeFilterInput>;
  sort?: Maybe<WpContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTaxonomyArgs = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showCloud?: Maybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpTaxonomyArgs = {
  filter?: Maybe<WpTaxonomyFilterInput>;
  sort?: Maybe<WpTaxonomySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpUserArgs = {
  avatar?: Maybe<WpAvatarFilterInput>;
  capKey?: Maybe<StringQueryOperatorInput>;
  capabilities?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  extraCapabilities?: Maybe<StringQueryOperatorInput>;
  firstName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastName?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nicename?: Maybe<StringQueryOperatorInput>;
  nickname?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<WpUserToPageConnectionFilterInput>;
  posts?: Maybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<WpUserToUserRoleConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpUserArgs = {
  filter?: Maybe<WpUserFilterInput>;
  sort?: Maybe<WpUserSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpCommentArgs = {
  agent?: Maybe<StringQueryOperatorInput>;
  approved?: Maybe<BooleanQueryOperatorInput>;
  author?: Maybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: Maybe<StringQueryOperatorInput>;
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  karma?: Maybe<IntQueryOperatorInput>;
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  replies?: Maybe<WpCommentToCommentConnectionFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpCommentArgs = {
  filter?: Maybe<WpCommentFilterInput>;
  sort?: Maybe<WpCommentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMediaItemArgs = {
  altText?: Maybe<StringQueryOperatorInput>;
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  mediaDetails?: Maybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: Maybe<StringQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  remoteFile?: Maybe<FileFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMediaItemArgs = {
  filter?: Maybe<WpMediaItemFilterInput>;
  sort?: Maybe<WpMediaItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPageArgs = {
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPageToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  menuOrder?: Maybe<IntQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPageArgs = {
  filter?: Maybe<WpPageFilterInput>;
  sort?: Maybe<WpPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPostArgs = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  categories?: Maybe<WpPostToCategoryConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPostToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  isSticky?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  pingStatus?: Maybe<StringQueryOperatorInput>;
  pinged?: Maybe<StringQueryOperatorInput>;
  postFormats?: Maybe<WpPostToPostFormatConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<WpPostToTagConnectionFilterInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpPostToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  toPing?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPostArgs = {
  filter?: Maybe<WpPostFilterInput>;
  sort?: Maybe<WpPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpCategoryArgs = {
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren?: Maybe<WpCategoryToCategoryConnectionFilterInput>;
  contentNodes?: Maybe<WpCategoryToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  posts?: Maybe<WpCategoryToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpCategoryArgs = {
  filter?: Maybe<WpCategoryFilterInput>;
  sort?: Maybe<WpCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpPostFormatArgs = {
  contentNodes?: Maybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpPostFormatToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpPostFormatArgs = {
  filter?: Maybe<WpPostFormatFilterInput>;
  sort?: Maybe<WpPostFormatSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpTagArgs = {
  contentNodes?: Maybe<WpTagToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpTagToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpTagArgs = {
  filter?: Maybe<WpTagFilterInput>;
  sort?: Maybe<WpTagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpUserRoleArgs = {
  capabilities?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpUserRoleArgs = {
  filter?: Maybe<WpUserRoleFilterInput>;
  sort?: Maybe<WpUserRoleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMenuArgs = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: Maybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMenuArgs = {
  filter?: Maybe<WpMenuFilterInput>;
  sort?: Maybe<WpMenuSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpMenuItemArgs = {
  childItems?: Maybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  linkRelationship?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: Maybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpMenuItemArgs = {
  filter?: Maybe<WpMenuItemFilterInput>;
  sort?: Maybe<WpMenuItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWpArgs = {
  allSettings?: Maybe<WpSettingsFilterInput>;
  discussionSettings?: Maybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: Maybe<WpGeneralSettingsFilterInput>;
  readingSettings?: Maybe<WpReadingSettingsFilterInput>;
  wpGatsby?: Maybe<WpWpGatsbyFilterInput>;
  writingSettings?: Maybe<WpWritingSettingsFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllWpArgs = {
  filter?: Maybe<WpFilterInput>;
  sort?: Maybe<WpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  id?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  ContextUri = 'context___uri',
  ContextTitle = 'context___title',
  ContextContent = 'context___content',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsUrl = 'pluginCreator___pluginOptions___url',
  PluginCreatorPluginOptionsVerbose = 'pluginCreator___pluginOptions___verbose',
  PluginCreatorPluginOptionsSourceMap = 'pluginCreator___pluginOptions___sourceMap',
  PluginCreatorPluginOptionsAutoLabel = 'pluginCreator___pluginOptions___autoLabel',
  PluginCreatorPluginOptionsLabelFormat = 'pluginCreator___pluginOptions___labelFormat',
  PluginCreatorPluginOptionsCssPropOptimization = 'pluginCreator___pluginOptions___cssPropOptimization',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsLessBabel = 'pluginCreator___pluginOptions___lessBabel',
  PluginCreatorPluginOptionsMediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
  PluginCreatorPluginOptionsRoot = 'pluginCreator___pluginOptions___root',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsUrl = 'pluginOptions___url',
  PluginOptionsVerbose = 'pluginOptions___verbose',
  PluginOptionsSourceMap = 'pluginOptions___sourceMap',
  PluginOptionsAutoLabel = 'pluginOptions___autoLabel',
  PluginOptionsLabelFormat = 'pluginOptions___labelFormat',
  PluginOptionsCssPropOptimization = 'pluginOptions___cssPropOptimization',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsLessBabel = 'pluginOptions___lessBabel',
  PluginOptionsMediaTypes = 'pluginOptions___mediaTypes',
  PluginOptionsRoot = 'pluginOptions___root',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  url?: Maybe<Scalars['String']>;
  verbose?: Maybe<Scalars['Boolean']>;
  sourceMap?: Maybe<Scalars['Boolean']>;
  autoLabel?: Maybe<Scalars['String']>;
  labelFormat?: Maybe<Scalars['String']>;
  cssPropOptimization?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  verbose?: Maybe<BooleanQueryOperatorInput>;
  sourceMap?: Maybe<BooleanQueryOperatorInput>;
  autoLabel?: Maybe<StringQueryOperatorInput>;
  labelFormat?: Maybe<StringQueryOperatorInput>;
  cssPropOptimization?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

/** Non-node WPGraphQL root fields. */
export type Wp = Node & {
  __typename?: 'Wp';
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<WpSettings>;
  discussionSettings?: Maybe<WpDiscussionSettings>;
  generalSettings?: Maybe<WpGeneralSettings>;
  readingSettings?: Maybe<WpReadingSettings>;
  /** Information needed by gatsby-source-wordpress. */
  wpGatsby?: Maybe<WpWpGatsby>;
  writingSettings?: Maybe<WpWritingSettings>;
  nodeType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type WpAvatar = {
  __typename?: 'WpAvatar';
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a
   * 404 instead of a default image), &#039;retro&#039; (8bit),
   * &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face),
   * &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;,
   * &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039;
   * (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;,
   * &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

export type WpAvatarFilterInput = {
  default?: Maybe<StringQueryOperatorInput>;
  extraAttr?: Maybe<StringQueryOperatorInput>;
  forceDefault?: Maybe<BooleanQueryOperatorInput>;
  foundAvatar?: Maybe<BooleanQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  rating?: Maybe<StringQueryOperatorInput>;
  scheme?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

/** The category type */
export type WpCategory = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & WpHierarchicalTermNode & WpMenuItemLinkable & {
  __typename?: 'WpCategory';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnection>;
  /** Connection between the category type and the category type */
  wpChildren?: Maybe<WpCategoryToCategoryConnection>;
  /** Connection between the category type and the ContentNode type */
  contentNodes?: Maybe<WpCategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the category type and the category type */
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the category type and the post type */
  posts?: Maybe<WpCategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the category type and the Taxonomy type */
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpCategoryConnection = {
  __typename?: 'WpCategoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpCategoryEdge>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpCategoryGroupConnection>;
};


export type WpCategoryConnectionDistinctArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpCategoryFieldsEnum;
};

export type WpCategoryEdge = {
  __typename?: 'WpCategoryEdge';
  next?: Maybe<WpCategory>;
  node: WpCategory;
  previous?: Maybe<WpCategory>;
};

export enum WpCategoryFieldsEnum {
  AncestorsNodes = 'ancestors___nodes',
  AncestorsNodesAncestorsNodes = 'ancestors___nodes___ancestors___nodes',
  AncestorsNodesWpChildrenNodes = 'ancestors___nodes___wpChildren___nodes',
  AncestorsNodesContentNodesNodes = 'ancestors___nodes___contentNodes___nodes',
  AncestorsNodesCount = 'ancestors___nodes___count',
  AncestorsNodesDatabaseId = 'ancestors___nodes___databaseId',
  AncestorsNodesDescription = 'ancestors___nodes___description',
  AncestorsNodesId = 'ancestors___nodes___id',
  AncestorsNodesLink = 'ancestors___nodes___link',
  AncestorsNodesName = 'ancestors___nodes___name',
  AncestorsNodesParentDatabaseId = 'ancestors___nodes___parentDatabaseId',
  AncestorsNodesParentId = 'ancestors___nodes___parentId',
  AncestorsNodesPostsNodes = 'ancestors___nodes___posts___nodes',
  AncestorsNodesSlug = 'ancestors___nodes___slug',
  AncestorsNodesTermGroupId = 'ancestors___nodes___termGroupId',
  AncestorsNodesTermTaxonomyId = 'ancestors___nodes___termTaxonomyId',
  AncestorsNodesUri = 'ancestors___nodes___uri',
  AncestorsNodesNodeType = 'ancestors___nodes___nodeType',
  AncestorsNodesParentId = 'ancestors___nodes___parent___id',
  AncestorsNodesParentChildren = 'ancestors___nodes___parent___children',
  AncestorsNodesChildren = 'ancestors___nodes___children',
  AncestorsNodesChildrenId = 'ancestors___nodes___children___id',
  AncestorsNodesChildrenChildren = 'ancestors___nodes___children___children',
  AncestorsNodesInternalContent = 'ancestors___nodes___internal___content',
  AncestorsNodesInternalContentDigest = 'ancestors___nodes___internal___contentDigest',
  AncestorsNodesInternalDescription = 'ancestors___nodes___internal___description',
  AncestorsNodesInternalFieldOwners = 'ancestors___nodes___internal___fieldOwners',
  AncestorsNodesInternalIgnoreType = 'ancestors___nodes___internal___ignoreType',
  AncestorsNodesInternalMediaType = 'ancestors___nodes___internal___mediaType',
  AncestorsNodesInternalOwner = 'ancestors___nodes___internal___owner',
  AncestorsNodesInternalType = 'ancestors___nodes___internal___type',
  WpChildrenNodes = 'wpChildren___nodes',
  WpChildrenNodesAncestorsNodes = 'wpChildren___nodes___ancestors___nodes',
  WpChildrenNodesWpChildrenNodes = 'wpChildren___nodes___wpChildren___nodes',
  WpChildrenNodesContentNodesNodes = 'wpChildren___nodes___contentNodes___nodes',
  WpChildrenNodesCount = 'wpChildren___nodes___count',
  WpChildrenNodesDatabaseId = 'wpChildren___nodes___databaseId',
  WpChildrenNodesDescription = 'wpChildren___nodes___description',
  WpChildrenNodesId = 'wpChildren___nodes___id',
  WpChildrenNodesLink = 'wpChildren___nodes___link',
  WpChildrenNodesName = 'wpChildren___nodes___name',
  WpChildrenNodesParentDatabaseId = 'wpChildren___nodes___parentDatabaseId',
  WpChildrenNodesParentId = 'wpChildren___nodes___parentId',
  WpChildrenNodesPostsNodes = 'wpChildren___nodes___posts___nodes',
  WpChildrenNodesSlug = 'wpChildren___nodes___slug',
  WpChildrenNodesTermGroupId = 'wpChildren___nodes___termGroupId',
  WpChildrenNodesTermTaxonomyId = 'wpChildren___nodes___termTaxonomyId',
  WpChildrenNodesUri = 'wpChildren___nodes___uri',
  WpChildrenNodesNodeType = 'wpChildren___nodes___nodeType',
  WpChildrenNodesParentId = 'wpChildren___nodes___parent___id',
  WpChildrenNodesParentChildren = 'wpChildren___nodes___parent___children',
  WpChildrenNodesChildren = 'wpChildren___nodes___children',
  WpChildrenNodesChildrenId = 'wpChildren___nodes___children___id',
  WpChildrenNodesChildrenChildren = 'wpChildren___nodes___children___children',
  WpChildrenNodesInternalContent = 'wpChildren___nodes___internal___content',
  WpChildrenNodesInternalContentDigest = 'wpChildren___nodes___internal___contentDigest',
  WpChildrenNodesInternalDescription = 'wpChildren___nodes___internal___description',
  WpChildrenNodesInternalFieldOwners = 'wpChildren___nodes___internal___fieldOwners',
  WpChildrenNodesInternalIgnoreType = 'wpChildren___nodes___internal___ignoreType',
  WpChildrenNodesInternalMediaType = 'wpChildren___nodes___internal___mediaType',
  WpChildrenNodesInternalOwner = 'wpChildren___nodes___internal___owner',
  WpChildrenNodesInternalType = 'wpChildren___nodes___internal___type',
  ContentNodesNodes = 'contentNodes___nodes',
  ContentNodesNodesDatabaseId = 'contentNodes___nodes___databaseId',
  ContentNodesNodesDate = 'contentNodes___nodes___date',
  ContentNodesNodesDateGmt = 'contentNodes___nodes___dateGmt',
  ContentNodesNodesDesiredSlug = 'contentNodes___nodes___desiredSlug',
  ContentNodesNodesEnclosure = 'contentNodes___nodes___enclosure',
  ContentNodesNodesGuid = 'contentNodes___nodes___guid',
  ContentNodesNodesId = 'contentNodes___nodes___id',
  ContentNodesNodesLink = 'contentNodes___nodes___link',
  ContentNodesNodesModified = 'contentNodes___nodes___modified',
  ContentNodesNodesModifiedGmt = 'contentNodes___nodes___modifiedGmt',
  ContentNodesNodesSlug = 'contentNodes___nodes___slug',
  ContentNodesNodesStatus = 'contentNodes___nodes___status',
  ContentNodesNodesTemplateTemplateName = 'contentNodes___nodes___template___templateName',
  ContentNodesNodesUri = 'contentNodes___nodes___uri',
  ContentNodesNodesNodeType = 'contentNodes___nodes___nodeType',
  Count = 'count',
  DatabaseId = 'databaseId',
  Description = 'description',
  Id = 'id',
  Link = 'link',
  Name = 'name',
  WpParentNodeAncestorsNodes = 'wpParent___node___ancestors___nodes',
  WpParentNodeWpChildrenNodes = 'wpParent___node___wpChildren___nodes',
  WpParentNodeContentNodesNodes = 'wpParent___node___contentNodes___nodes',
  WpParentNodeCount = 'wpParent___node___count',
  WpParentNodeDatabaseId = 'wpParent___node___databaseId',
  WpParentNodeDescription = 'wpParent___node___description',
  WpParentNodeId = 'wpParent___node___id',
  WpParentNodeLink = 'wpParent___node___link',
  WpParentNodeName = 'wpParent___node___name',
  WpParentNodeParentDatabaseId = 'wpParent___node___parentDatabaseId',
  WpParentNodeParentId = 'wpParent___node___parentId',
  WpParentNodePostsNodes = 'wpParent___node___posts___nodes',
  WpParentNodeSlug = 'wpParent___node___slug',
  WpParentNodeTermGroupId = 'wpParent___node___termGroupId',
  WpParentNodeTermTaxonomyId = 'wpParent___node___termTaxonomyId',
  WpParentNodeUri = 'wpParent___node___uri',
  WpParentNodeNodeType = 'wpParent___node___nodeType',
  WpParentNodeParentId = 'wpParent___node___parent___id',
  WpParentNodeParentChildren = 'wpParent___node___parent___children',
  WpParentNodeChildren = 'wpParent___node___children',
  WpParentNodeChildrenId = 'wpParent___node___children___id',
  WpParentNodeChildrenChildren = 'wpParent___node___children___children',
  WpParentNodeInternalContent = 'wpParent___node___internal___content',
  WpParentNodeInternalContentDigest = 'wpParent___node___internal___contentDigest',
  WpParentNodeInternalDescription = 'wpParent___node___internal___description',
  WpParentNodeInternalFieldOwners = 'wpParent___node___internal___fieldOwners',
  WpParentNodeInternalIgnoreType = 'wpParent___node___internal___ignoreType',
  WpParentNodeInternalMediaType = 'wpParent___node___internal___mediaType',
  WpParentNodeInternalOwner = 'wpParent___node___internal___owner',
  WpParentNodeInternalType = 'wpParent___node___internal___type',
  ParentDatabaseId = 'parentDatabaseId',
  ParentId = 'parentId',
  PostsNodes = 'posts___nodes',
  PostsNodesAuthorDatabaseId = 'posts___nodes___authorDatabaseId',
  PostsNodesAuthorId = 'posts___nodes___authorId',
  PostsNodesCategoriesNodes = 'posts___nodes___categories___nodes',
  PostsNodesCommentCount = 'posts___nodes___commentCount',
  PostsNodesCommentStatus = 'posts___nodes___commentStatus',
  PostsNodesCommentsNodes = 'posts___nodes___comments___nodes',
  PostsNodesContent = 'posts___nodes___content',
  PostsNodesDatabaseId = 'posts___nodes___databaseId',
  PostsNodesDate = 'posts___nodes___date',
  PostsNodesDateGmt = 'posts___nodes___dateGmt',
  PostsNodesDesiredSlug = 'posts___nodes___desiredSlug',
  PostsNodesEnclosure = 'posts___nodes___enclosure',
  PostsNodesExcerpt = 'posts___nodes___excerpt',
  PostsNodesFeaturedImageDatabaseId = 'posts___nodes___featuredImageDatabaseId',
  PostsNodesFeaturedImageId = 'posts___nodes___featuredImageId',
  PostsNodesGuid = 'posts___nodes___guid',
  PostsNodesId = 'posts___nodes___id',
  PostsNodesIsRevision = 'posts___nodes___isRevision',
  PostsNodesIsSticky = 'posts___nodes___isSticky',
  PostsNodesLink = 'posts___nodes___link',
  PostsNodesModified = 'posts___nodes___modified',
  PostsNodesModifiedGmt = 'posts___nodes___modifiedGmt',
  PostsNodesPingStatus = 'posts___nodes___pingStatus',
  PostsNodesPinged = 'posts___nodes___pinged',
  PostsNodesPostFormatsNodes = 'posts___nodes___postFormats___nodes',
  PostsNodesSlug = 'posts___nodes___slug',
  PostsNodesStatus = 'posts___nodes___status',
  PostsNodesTagsNodes = 'posts___nodes___tags___nodes',
  PostsNodesTemplateTemplateName = 'posts___nodes___template___templateName',
  PostsNodesTermsNodes = 'posts___nodes___terms___nodes',
  PostsNodesTitle = 'posts___nodes___title',
  PostsNodesToPing = 'posts___nodes___toPing',
  PostsNodesUri = 'posts___nodes___uri',
  PostsNodesNodeType = 'posts___nodes___nodeType',
  PostsNodesParentId = 'posts___nodes___parent___id',
  PostsNodesParentChildren = 'posts___nodes___parent___children',
  PostsNodesChildren = 'posts___nodes___children',
  PostsNodesChildrenId = 'posts___nodes___children___id',
  PostsNodesChildrenChildren = 'posts___nodes___children___children',
  PostsNodesInternalContent = 'posts___nodes___internal___content',
  PostsNodesInternalContentDigest = 'posts___nodes___internal___contentDigest',
  PostsNodesInternalDescription = 'posts___nodes___internal___description',
  PostsNodesInternalFieldOwners = 'posts___nodes___internal___fieldOwners',
  PostsNodesInternalIgnoreType = 'posts___nodes___internal___ignoreType',
  PostsNodesInternalMediaType = 'posts___nodes___internal___mediaType',
  PostsNodesInternalOwner = 'posts___nodes___internal___owner',
  PostsNodesInternalType = 'posts___nodes___internal___type',
  Slug = 'slug',
  TaxonomyNodeArchivePath = 'taxonomy___node___archivePath',
  TaxonomyNodeConnectedContentTypesNodes = 'taxonomy___node___connectedContentTypes___nodes',
  TaxonomyNodeDescription = 'taxonomy___node___description',
  TaxonomyNodeGraphqlPluralName = 'taxonomy___node___graphqlPluralName',
  TaxonomyNodeGraphqlSingleName = 'taxonomy___node___graphqlSingleName',
  TaxonomyNodeHierarchical = 'taxonomy___node___hierarchical',
  TaxonomyNodeId = 'taxonomy___node___id',
  TaxonomyNodeLabel = 'taxonomy___node___label',
  TaxonomyNodeName = 'taxonomy___node___name',
  TaxonomyNodePublic = 'taxonomy___node___public',
  TaxonomyNodeRestBase = 'taxonomy___node___restBase',
  TaxonomyNodeRestControllerClass = 'taxonomy___node___restControllerClass',
  TaxonomyNodeShowCloud = 'taxonomy___node___showCloud',
  TaxonomyNodeShowInAdminColumn = 'taxonomy___node___showInAdminColumn',
  TaxonomyNodeShowInGraphql = 'taxonomy___node___showInGraphql',
  TaxonomyNodeShowInMenu = 'taxonomy___node___showInMenu',
  TaxonomyNodeShowInNavMenus = 'taxonomy___node___showInNavMenus',
  TaxonomyNodeShowInQuickEdit = 'taxonomy___node___showInQuickEdit',
  TaxonomyNodeShowInRest = 'taxonomy___node___showInRest',
  TaxonomyNodeShowUi = 'taxonomy___node___showUi',
  TaxonomyNodeNodeType = 'taxonomy___node___nodeType',
  TaxonomyNodeParentId = 'taxonomy___node___parent___id',
  TaxonomyNodeParentChildren = 'taxonomy___node___parent___children',
  TaxonomyNodeChildren = 'taxonomy___node___children',
  TaxonomyNodeChildrenId = 'taxonomy___node___children___id',
  TaxonomyNodeChildrenChildren = 'taxonomy___node___children___children',
  TaxonomyNodeInternalContent = 'taxonomy___node___internal___content',
  TaxonomyNodeInternalContentDigest = 'taxonomy___node___internal___contentDigest',
  TaxonomyNodeInternalDescription = 'taxonomy___node___internal___description',
  TaxonomyNodeInternalFieldOwners = 'taxonomy___node___internal___fieldOwners',
  TaxonomyNodeInternalIgnoreType = 'taxonomy___node___internal___ignoreType',
  TaxonomyNodeInternalMediaType = 'taxonomy___node___internal___mediaType',
  TaxonomyNodeInternalOwner = 'taxonomy___node___internal___owner',
  TaxonomyNodeInternalType = 'taxonomy___node___internal___type',
  TermGroupId = 'termGroupId',
  TermTaxonomyId = 'termTaxonomyId',
  Uri = 'uri',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpCategoryFilterInput = {
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  wpChildren?: Maybe<WpCategoryToCategoryConnectionFilterInput>;
  contentNodes?: Maybe<WpCategoryToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  posts?: Maybe<WpCategoryToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpCategoryFilterListInput = {
  elemMatch?: Maybe<WpCategoryFilterInput>;
};

export type WpCategoryGroupConnection = {
  __typename?: 'WpCategoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpCategoryEdge>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpCategorySortInput = {
  fields?: Maybe<Array<Maybe<WpCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the category type and the category type */
export type WpCategoryToAncestorsCategoryConnection = {
  __typename?: 'WpCategoryToAncestorsCategoryConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpCategoryToAncestorsCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

/** Connection between the category type and the category type */
export type WpCategoryToCategoryConnection = {
  __typename?: 'WpCategoryToCategoryConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpCategoryToCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

/** Connection between the category type and the ContentNode type */
export type WpCategoryToContentNodeConnection = {
  __typename?: 'WpCategoryToContentNodeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpCategoryToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the category type and the category type */
export type WpCategoryToParentCategoryConnectionEdge = {
  __typename?: 'WpCategoryToParentCategoryConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpCategory>;
};

export type WpCategoryToParentCategoryConnectionEdgeFilterInput = {
  node?: Maybe<WpCategoryFilterInput>;
};

/** Connection between the category type and the post type */
export type WpCategoryToPostConnection = {
  __typename?: 'WpCategoryToPostConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpCategoryToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

/** Connection between the category type and the Taxonomy type */
export type WpCategoryToTaxonomyConnectionEdge = {
  __typename?: 'WpCategoryToTaxonomyConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

export type WpCategoryToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

/** A Comment object */
export type WpComment = Node & WpNode & WpDatabaseIdentifier & {
  __typename?: 'WpComment';
  /**
   * User agent used to post the comment. This field is equivalent to
   * WP_Comment-&gt;comment_agent and the value matching the
   * &quot;comment_agent&quot; column in SQL.
   */
  agent?: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_approved and the value matching the
   * &quot;comment_approved&quot; column in SQL.
   */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<WpCommentToCommenterConnectionEdge>;
  /**
   * IP address for the author. This field is equivalent to
   * WP_Comment-&gt;comment_author_IP and the value matching the
   * &quot;comment_author_IP&quot; column in SQL.
   */
  authorIp?: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdge>;
  /**
   * Content of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_content and the value matching the
   * &quot;comment_content&quot; column in SQL.
   */
  content?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /**
   * Date the comment was posted in local time. This field is equivalent to
   * WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   */
  date?: Maybe<Scalars['Date']>;
  /**
   * Date the comment was posted in GMT. This field is equivalent to
   * WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   */
  dateGmt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  /**
   * Karma value for the comment. This field is equivalent to
   * WP_Comment-&gt;comment_karma and the value matching the
   * &quot;comment_karma&quot; column in SQL.
   */
  karma?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the Comment type */
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  replies?: Maybe<WpCommentToCommentConnection>;
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and
   * the value matching the &quot;comment_type&quot; column in SQL.
   */
  type?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** A Comment object */
export type WpCommentDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A Comment object */
export type WpCommentDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpCommentConnection = {
  __typename?: 'WpCommentConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpCommentEdge>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpCommentGroupConnection>;
};


export type WpCommentConnectionDistinctArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpCommentFieldsEnum;
};

export type WpCommentEdge = {
  __typename?: 'WpCommentEdge';
  next?: Maybe<WpComment>;
  node: WpComment;
  previous?: Maybe<WpComment>;
};

export type WpCommenter = {
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

export type WpCommenterFilterInput = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export enum WpCommentFieldsEnum {
  Agent = 'agent',
  Approved = 'approved',
  AuthorNodeDatabaseId = 'author___node___databaseId',
  AuthorNodeEmail = 'author___node___email',
  AuthorNodeId = 'author___node___id',
  AuthorNodeName = 'author___node___name',
  AuthorNodeUrl = 'author___node___url',
  AuthorIp = 'authorIp',
  CommentedOnNodeDatabaseId = 'commentedOn___node___databaseId',
  CommentedOnNodeDate = 'commentedOn___node___date',
  CommentedOnNodeDateGmt = 'commentedOn___node___dateGmt',
  CommentedOnNodeDesiredSlug = 'commentedOn___node___desiredSlug',
  CommentedOnNodeEnclosure = 'commentedOn___node___enclosure',
  CommentedOnNodeGuid = 'commentedOn___node___guid',
  CommentedOnNodeId = 'commentedOn___node___id',
  CommentedOnNodeLink = 'commentedOn___node___link',
  CommentedOnNodeModified = 'commentedOn___node___modified',
  CommentedOnNodeModifiedGmt = 'commentedOn___node___modifiedGmt',
  CommentedOnNodeSlug = 'commentedOn___node___slug',
  CommentedOnNodeStatus = 'commentedOn___node___status',
  CommentedOnNodeTemplateTemplateName = 'commentedOn___node___template___templateName',
  CommentedOnNodeUri = 'commentedOn___node___uri',
  CommentedOnNodeNodeType = 'commentedOn___node___nodeType',
  Content = 'content',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  Id = 'id',
  Karma = 'karma',
  WpParentNodeAgent = 'wpParent___node___agent',
  WpParentNodeApproved = 'wpParent___node___approved',
  WpParentNodeAuthorIp = 'wpParent___node___authorIp',
  WpParentNodeContent = 'wpParent___node___content',
  WpParentNodeDatabaseId = 'wpParent___node___databaseId',
  WpParentNodeDate = 'wpParent___node___date',
  WpParentNodeDateGmt = 'wpParent___node___dateGmt',
  WpParentNodeId = 'wpParent___node___id',
  WpParentNodeKarma = 'wpParent___node___karma',
  WpParentNodeParentDatabaseId = 'wpParent___node___parentDatabaseId',
  WpParentNodeParentId = 'wpParent___node___parentId',
  WpParentNodeRepliesNodes = 'wpParent___node___replies___nodes',
  WpParentNodeType = 'wpParent___node___type',
  WpParentNodeNodeType = 'wpParent___node___nodeType',
  WpParentNodeParentId = 'wpParent___node___parent___id',
  WpParentNodeParentChildren = 'wpParent___node___parent___children',
  WpParentNodeChildren = 'wpParent___node___children',
  WpParentNodeChildrenId = 'wpParent___node___children___id',
  WpParentNodeChildrenChildren = 'wpParent___node___children___children',
  WpParentNodeInternalContent = 'wpParent___node___internal___content',
  WpParentNodeInternalContentDigest = 'wpParent___node___internal___contentDigest',
  WpParentNodeInternalDescription = 'wpParent___node___internal___description',
  WpParentNodeInternalFieldOwners = 'wpParent___node___internal___fieldOwners',
  WpParentNodeInternalIgnoreType = 'wpParent___node___internal___ignoreType',
  WpParentNodeInternalMediaType = 'wpParent___node___internal___mediaType',
  WpParentNodeInternalOwner = 'wpParent___node___internal___owner',
  WpParentNodeInternalType = 'wpParent___node___internal___type',
  ParentDatabaseId = 'parentDatabaseId',
  ParentId = 'parentId',
  RepliesNodes = 'replies___nodes',
  RepliesNodesAgent = 'replies___nodes___agent',
  RepliesNodesApproved = 'replies___nodes___approved',
  RepliesNodesAuthorIp = 'replies___nodes___authorIp',
  RepliesNodesContent = 'replies___nodes___content',
  RepliesNodesDatabaseId = 'replies___nodes___databaseId',
  RepliesNodesDate = 'replies___nodes___date',
  RepliesNodesDateGmt = 'replies___nodes___dateGmt',
  RepliesNodesId = 'replies___nodes___id',
  RepliesNodesKarma = 'replies___nodes___karma',
  RepliesNodesParentDatabaseId = 'replies___nodes___parentDatabaseId',
  RepliesNodesParentId = 'replies___nodes___parentId',
  RepliesNodesRepliesNodes = 'replies___nodes___replies___nodes',
  RepliesNodesType = 'replies___nodes___type',
  RepliesNodesNodeType = 'replies___nodes___nodeType',
  RepliesNodesParentId = 'replies___nodes___parent___id',
  RepliesNodesParentChildren = 'replies___nodes___parent___children',
  RepliesNodesChildren = 'replies___nodes___children',
  RepliesNodesChildrenId = 'replies___nodes___children___id',
  RepliesNodesChildrenChildren = 'replies___nodes___children___children',
  RepliesNodesInternalContent = 'replies___nodes___internal___content',
  RepliesNodesInternalContentDigest = 'replies___nodes___internal___contentDigest',
  RepliesNodesInternalDescription = 'replies___nodes___internal___description',
  RepliesNodesInternalFieldOwners = 'replies___nodes___internal___fieldOwners',
  RepliesNodesInternalIgnoreType = 'replies___nodes___internal___ignoreType',
  RepliesNodesInternalMediaType = 'replies___nodes___internal___mediaType',
  RepliesNodesInternalOwner = 'replies___nodes___internal___owner',
  RepliesNodesInternalType = 'replies___nodes___internal___type',
  Type = 'type',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpCommentFilterInput = {
  agent?: Maybe<StringQueryOperatorInput>;
  approved?: Maybe<BooleanQueryOperatorInput>;
  author?: Maybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: Maybe<StringQueryOperatorInput>;
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  karma?: Maybe<IntQueryOperatorInput>;
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  replies?: Maybe<WpCommentToCommentConnectionFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpCommentFilterListInput = {
  elemMatch?: Maybe<WpCommentFilterInput>;
};

export type WpCommentGroupConnection = {
  __typename?: 'WpCommentGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpCommentEdge>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpCommentSortInput = {
  fields?: Maybe<Array<Maybe<WpCommentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToCommentConnection = {
  __typename?: 'WpCommentToCommentConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpCommentToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

/** Connection between the Comment type and the Commenter type */
export type WpCommentToCommenterConnectionEdge = {
  __typename?: 'WpCommentToCommenterConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpCommenter>;
};

export type WpCommentToCommenterConnectionEdgeFilterInput = {
  node?: Maybe<WpCommenterFilterInput>;
};

/** Connection between the Comment type and the ContentNode type */
export type WpCommentToContentNodeConnectionEdge = {
  __typename?: 'WpCommentToContentNodeConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

export type WpCommentToContentNodeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentNodeFilterInput>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToParentCommentConnectionEdge = {
  __typename?: 'WpCommentToParentCommentConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpComment>;
};

export type WpCommentToParentCommentConnectionEdgeFilterInput = {
  node?: Maybe<WpCommentFilterInput>;
};

export type WpConnection = {
  __typename?: 'WpConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpEdge>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpGroupConnection>;
};


export type WpConnectionDistinctArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpFieldsEnum;
};

export type WpContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post->guid and the guid column in the "post_objects" database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post->post_name field
   * and the post_name column in the database for the "post_objects" table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
};


export type WpContentNodeDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type WpContentNodeModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpContentNodeConnection = {
  __typename?: 'WpContentNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpContentNodeEdge>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpContentNodeGroupConnection>;
};


export type WpContentNodeConnectionDistinctArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpContentNodeFieldsEnum;
};

export type WpContentNodeEdge = {
  __typename?: 'WpContentNodeEdge';
  next?: Maybe<WpContentNode>;
  node: WpContentNode;
  previous?: Maybe<WpContentNode>;
};

export enum WpContentNodeFieldsEnum {
  ContentTypeNodeArchivePath = 'contentType___node___archivePath',
  ContentTypeNodeCanExport = 'contentType___node___canExport',
  ContentTypeNodeConnectedTaxonomiesNodes = 'contentType___node___connectedTaxonomies___nodes',
  ContentTypeNodeContentNodesNodes = 'contentType___node___contentNodes___nodes',
  ContentTypeNodeDeleteWithUser = 'contentType___node___deleteWithUser',
  ContentTypeNodeDescription = 'contentType___node___description',
  ContentTypeNodeExcludeFromSearch = 'contentType___node___excludeFromSearch',
  ContentTypeNodeGraphqlPluralName = 'contentType___node___graphqlPluralName',
  ContentTypeNodeGraphqlSingleName = 'contentType___node___graphqlSingleName',
  ContentTypeNodeHasArchive = 'contentType___node___hasArchive',
  ContentTypeNodeHierarchical = 'contentType___node___hierarchical',
  ContentTypeNodeId = 'contentType___node___id',
  ContentTypeNodeIsFrontPage = 'contentType___node___isFrontPage',
  ContentTypeNodeIsPostsPage = 'contentType___node___isPostsPage',
  ContentTypeNodeLabel = 'contentType___node___label',
  ContentTypeNodeLabelsAddNew = 'contentType___node___labels___addNew',
  ContentTypeNodeLabelsAddNewItem = 'contentType___node___labels___addNewItem',
  ContentTypeNodeLabelsAllItems = 'contentType___node___labels___allItems',
  ContentTypeNodeLabelsArchives = 'contentType___node___labels___archives',
  ContentTypeNodeLabelsAttributes = 'contentType___node___labels___attributes',
  ContentTypeNodeLabelsEditItem = 'contentType___node___labels___editItem',
  ContentTypeNodeLabelsFeaturedImage = 'contentType___node___labels___featuredImage',
  ContentTypeNodeLabelsFilterItemsList = 'contentType___node___labels___filterItemsList',
  ContentTypeNodeLabelsInsertIntoItem = 'contentType___node___labels___insertIntoItem',
  ContentTypeNodeLabelsItemsList = 'contentType___node___labels___itemsList',
  ContentTypeNodeLabelsItemsListNavigation = 'contentType___node___labels___itemsListNavigation',
  ContentTypeNodeLabelsMenuName = 'contentType___node___labels___menuName',
  ContentTypeNodeLabelsName = 'contentType___node___labels___name',
  ContentTypeNodeLabelsNewItem = 'contentType___node___labels___newItem',
  ContentTypeNodeLabelsNotFound = 'contentType___node___labels___notFound',
  ContentTypeNodeLabelsNotFoundInTrash = 'contentType___node___labels___notFoundInTrash',
  ContentTypeNodeLabelsParentItemColon = 'contentType___node___labels___parentItemColon',
  ContentTypeNodeLabelsRemoveFeaturedImage = 'contentType___node___labels___removeFeaturedImage',
  ContentTypeNodeLabelsSearchItems = 'contentType___node___labels___searchItems',
  ContentTypeNodeLabelsSetFeaturedImage = 'contentType___node___labels___setFeaturedImage',
  ContentTypeNodeLabelsSingularName = 'contentType___node___labels___singularName',
  ContentTypeNodeLabelsUploadedToThisItem = 'contentType___node___labels___uploadedToThisItem',
  ContentTypeNodeLabelsUseFeaturedImage = 'contentType___node___labels___useFeaturedImage',
  ContentTypeNodeLabelsViewItem = 'contentType___node___labels___viewItem',
  ContentTypeNodeLabelsViewItems = 'contentType___node___labels___viewItems',
  ContentTypeNodeMenuIcon = 'contentType___node___menuIcon',
  ContentTypeNodeMenuPosition = 'contentType___node___menuPosition',
  ContentTypeNodeName = 'contentType___node___name',
  ContentTypeNodePublic = 'contentType___node___public',
  ContentTypeNodePubliclyQueryable = 'contentType___node___publiclyQueryable',
  ContentTypeNodeRestBase = 'contentType___node___restBase',
  ContentTypeNodeRestControllerClass = 'contentType___node___restControllerClass',
  ContentTypeNodeShowInAdminBar = 'contentType___node___showInAdminBar',
  ContentTypeNodeShowInGraphql = 'contentType___node___showInGraphql',
  ContentTypeNodeShowInMenu = 'contentType___node___showInMenu',
  ContentTypeNodeShowInNavMenus = 'contentType___node___showInNavMenus',
  ContentTypeNodeShowInRest = 'contentType___node___showInRest',
  ContentTypeNodeShowUi = 'contentType___node___showUi',
  ContentTypeNodeUri = 'contentType___node___uri',
  ContentTypeNodeNodeType = 'contentType___node___nodeType',
  ContentTypeNodeParentId = 'contentType___node___parent___id',
  ContentTypeNodeParentChildren = 'contentType___node___parent___children',
  ContentTypeNodeChildren = 'contentType___node___children',
  ContentTypeNodeChildrenId = 'contentType___node___children___id',
  ContentTypeNodeChildrenChildren = 'contentType___node___children___children',
  ContentTypeNodeInternalContent = 'contentType___node___internal___content',
  ContentTypeNodeInternalContentDigest = 'contentType___node___internal___contentDigest',
  ContentTypeNodeInternalDescription = 'contentType___node___internal___description',
  ContentTypeNodeInternalFieldOwners = 'contentType___node___internal___fieldOwners',
  ContentTypeNodeInternalIgnoreType = 'contentType___node___internal___ignoreType',
  ContentTypeNodeInternalMediaType = 'contentType___node___internal___mediaType',
  ContentTypeNodeInternalOwner = 'contentType___node___internal___owner',
  ContentTypeNodeInternalType = 'contentType___node___internal___type',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  DesiredSlug = 'desiredSlug',
  Enclosure = 'enclosure',
  Guid = 'guid',
  Id = 'id',
  LastEditedByNodeAvatarDefault = 'lastEditedBy___node___avatar___default',
  LastEditedByNodeAvatarExtraAttr = 'lastEditedBy___node___avatar___extraAttr',
  LastEditedByNodeAvatarForceDefault = 'lastEditedBy___node___avatar___forceDefault',
  LastEditedByNodeAvatarFoundAvatar = 'lastEditedBy___node___avatar___foundAvatar',
  LastEditedByNodeAvatarHeight = 'lastEditedBy___node___avatar___height',
  LastEditedByNodeAvatarRating = 'lastEditedBy___node___avatar___rating',
  LastEditedByNodeAvatarScheme = 'lastEditedBy___node___avatar___scheme',
  LastEditedByNodeAvatarSize = 'lastEditedBy___node___avatar___size',
  LastEditedByNodeAvatarUrl = 'lastEditedBy___node___avatar___url',
  LastEditedByNodeAvatarWidth = 'lastEditedBy___node___avatar___width',
  LastEditedByNodeCapKey = 'lastEditedBy___node___capKey',
  LastEditedByNodeCapabilities = 'lastEditedBy___node___capabilities',
  LastEditedByNodeCommentsNodes = 'lastEditedBy___node___comments___nodes',
  LastEditedByNodeDatabaseId = 'lastEditedBy___node___databaseId',
  LastEditedByNodeDescription = 'lastEditedBy___node___description',
  LastEditedByNodeEmail = 'lastEditedBy___node___email',
  LastEditedByNodeExtraCapabilities = 'lastEditedBy___node___extraCapabilities',
  LastEditedByNodeFirstName = 'lastEditedBy___node___firstName',
  LastEditedByNodeId = 'lastEditedBy___node___id',
  LastEditedByNodeLastName = 'lastEditedBy___node___lastName',
  LastEditedByNodeLocale = 'lastEditedBy___node___locale',
  LastEditedByNodeName = 'lastEditedBy___node___name',
  LastEditedByNodeNicename = 'lastEditedBy___node___nicename',
  LastEditedByNodeNickname = 'lastEditedBy___node___nickname',
  LastEditedByNodePagesNodes = 'lastEditedBy___node___pages___nodes',
  LastEditedByNodePostsNodes = 'lastEditedBy___node___posts___nodes',
  LastEditedByNodeRegisteredDate = 'lastEditedBy___node___registeredDate',
  LastEditedByNodeRolesNodes = 'lastEditedBy___node___roles___nodes',
  LastEditedByNodeSlug = 'lastEditedBy___node___slug',
  LastEditedByNodeUri = 'lastEditedBy___node___uri',
  LastEditedByNodeUrl = 'lastEditedBy___node___url',
  LastEditedByNodeUsername = 'lastEditedBy___node___username',
  LastEditedByNodeNodeType = 'lastEditedBy___node___nodeType',
  LastEditedByNodeParentId = 'lastEditedBy___node___parent___id',
  LastEditedByNodeParentChildren = 'lastEditedBy___node___parent___children',
  LastEditedByNodeChildren = 'lastEditedBy___node___children',
  LastEditedByNodeChildrenId = 'lastEditedBy___node___children___id',
  LastEditedByNodeChildrenChildren = 'lastEditedBy___node___children___children',
  LastEditedByNodeInternalContent = 'lastEditedBy___node___internal___content',
  LastEditedByNodeInternalContentDigest = 'lastEditedBy___node___internal___contentDigest',
  LastEditedByNodeInternalDescription = 'lastEditedBy___node___internal___description',
  LastEditedByNodeInternalFieldOwners = 'lastEditedBy___node___internal___fieldOwners',
  LastEditedByNodeInternalIgnoreType = 'lastEditedBy___node___internal___ignoreType',
  LastEditedByNodeInternalMediaType = 'lastEditedBy___node___internal___mediaType',
  LastEditedByNodeInternalOwner = 'lastEditedBy___node___internal___owner',
  LastEditedByNodeInternalType = 'lastEditedBy___node___internal___type',
  Link = 'link',
  Modified = 'modified',
  ModifiedGmt = 'modifiedGmt',
  Slug = 'slug',
  Status = 'status',
  TemplateTemplateName = 'template___templateName',
  Uri = 'uri',
  NodeType = 'nodeType'
}

export type WpContentNodeFilterInput = {
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type WpContentNodeFilterListInput = {
  elemMatch?: Maybe<WpContentNodeFilterInput>;
};

export type WpContentNodeGroupConnection = {
  __typename?: 'WpContentNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpContentNodeEdge>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpContentNodeSortInput = {
  fields?: Maybe<Array<Maybe<WpContentNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the ContentNode type and the ContentType type */
export type WpContentNodeToContentTypeConnectionEdge = {
  __typename?: 'WpContentNodeToContentTypeConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

export type WpContentNodeToContentTypeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentTypeFilterInput>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLastConnectionEdge = {
  __typename?: 'WpContentNodeToEditLastConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpUser>;
};

export type WpContentNodeToEditLastConnectionEdgeFilterInput = {
  node?: Maybe<WpUserFilterInput>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLockConnectionEdge = {
  __typename?: 'WpContentNodeToEditLockConnectionEdge';
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']>;
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpUser>;
};

export type WpContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

export type WpContentTemplateFilterInput = {
  templateName?: Maybe<StringQueryOperatorInput>;
};

/** An Post Type object */
export type WpContentType = Node & WpNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpContentType';
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']>;
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes?: Maybe<WpContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  labels?: Maybe<WpPostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  /**
   * Whether a content type is intended for use publicly either via the admin
   * interface or by front-end users. While the default settings of
   * exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are
   * inherited from public, each does not rely on this relationship and controls a
   * very specific intention.
   */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /**
   * Where to show the content type in the admin menu. To work, $show_ui must be
   * true. If true, the post type is shown in its own top level menu. If false, no
   * menu is shown. If a string of an existing top level menu (eg.
   * &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type
   * will be placed as a sub-menu of that.
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpContentTypeConnection = {
  __typename?: 'WpContentTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpContentTypeEdge>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpContentTypeGroupConnection>;
};


export type WpContentTypeConnectionDistinctArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpContentTypeFieldsEnum;
};

export type WpContentTypeEdge = {
  __typename?: 'WpContentTypeEdge';
  next?: Maybe<WpContentType>;
  node: WpContentType;
  previous?: Maybe<WpContentType>;
};

export enum WpContentTypeFieldsEnum {
  ArchivePath = 'archivePath',
  CanExport = 'canExport',
  ConnectedTaxonomiesNodes = 'connectedTaxonomies___nodes',
  ConnectedTaxonomiesNodesArchivePath = 'connectedTaxonomies___nodes___archivePath',
  ConnectedTaxonomiesNodesConnectedContentTypesNodes = 'connectedTaxonomies___nodes___connectedContentTypes___nodes',
  ConnectedTaxonomiesNodesDescription = 'connectedTaxonomies___nodes___description',
  ConnectedTaxonomiesNodesGraphqlPluralName = 'connectedTaxonomies___nodes___graphqlPluralName',
  ConnectedTaxonomiesNodesGraphqlSingleName = 'connectedTaxonomies___nodes___graphqlSingleName',
  ConnectedTaxonomiesNodesHierarchical = 'connectedTaxonomies___nodes___hierarchical',
  ConnectedTaxonomiesNodesId = 'connectedTaxonomies___nodes___id',
  ConnectedTaxonomiesNodesLabel = 'connectedTaxonomies___nodes___label',
  ConnectedTaxonomiesNodesName = 'connectedTaxonomies___nodes___name',
  ConnectedTaxonomiesNodesPublic = 'connectedTaxonomies___nodes___public',
  ConnectedTaxonomiesNodesRestBase = 'connectedTaxonomies___nodes___restBase',
  ConnectedTaxonomiesNodesRestControllerClass = 'connectedTaxonomies___nodes___restControllerClass',
  ConnectedTaxonomiesNodesShowCloud = 'connectedTaxonomies___nodes___showCloud',
  ConnectedTaxonomiesNodesShowInAdminColumn = 'connectedTaxonomies___nodes___showInAdminColumn',
  ConnectedTaxonomiesNodesShowInGraphql = 'connectedTaxonomies___nodes___showInGraphql',
  ConnectedTaxonomiesNodesShowInMenu = 'connectedTaxonomies___nodes___showInMenu',
  ConnectedTaxonomiesNodesShowInNavMenus = 'connectedTaxonomies___nodes___showInNavMenus',
  ConnectedTaxonomiesNodesShowInQuickEdit = 'connectedTaxonomies___nodes___showInQuickEdit',
  ConnectedTaxonomiesNodesShowInRest = 'connectedTaxonomies___nodes___showInRest',
  ConnectedTaxonomiesNodesShowUi = 'connectedTaxonomies___nodes___showUi',
  ConnectedTaxonomiesNodesNodeType = 'connectedTaxonomies___nodes___nodeType',
  ConnectedTaxonomiesNodesParentId = 'connectedTaxonomies___nodes___parent___id',
  ConnectedTaxonomiesNodesParentChildren = 'connectedTaxonomies___nodes___parent___children',
  ConnectedTaxonomiesNodesChildren = 'connectedTaxonomies___nodes___children',
  ConnectedTaxonomiesNodesChildrenId = 'connectedTaxonomies___nodes___children___id',
  ConnectedTaxonomiesNodesChildrenChildren = 'connectedTaxonomies___nodes___children___children',
  ConnectedTaxonomiesNodesInternalContent = 'connectedTaxonomies___nodes___internal___content',
  ConnectedTaxonomiesNodesInternalContentDigest = 'connectedTaxonomies___nodes___internal___contentDigest',
  ConnectedTaxonomiesNodesInternalDescription = 'connectedTaxonomies___nodes___internal___description',
  ConnectedTaxonomiesNodesInternalFieldOwners = 'connectedTaxonomies___nodes___internal___fieldOwners',
  ConnectedTaxonomiesNodesInternalIgnoreType = 'connectedTaxonomies___nodes___internal___ignoreType',
  ConnectedTaxonomiesNodesInternalMediaType = 'connectedTaxonomies___nodes___internal___mediaType',
  ConnectedTaxonomiesNodesInternalOwner = 'connectedTaxonomies___nodes___internal___owner',
  ConnectedTaxonomiesNodesInternalType = 'connectedTaxonomies___nodes___internal___type',
  ContentNodesNodes = 'contentNodes___nodes',
  ContentNodesNodesDatabaseId = 'contentNodes___nodes___databaseId',
  ContentNodesNodesDate = 'contentNodes___nodes___date',
  ContentNodesNodesDateGmt = 'contentNodes___nodes___dateGmt',
  ContentNodesNodesDesiredSlug = 'contentNodes___nodes___desiredSlug',
  ContentNodesNodesEnclosure = 'contentNodes___nodes___enclosure',
  ContentNodesNodesGuid = 'contentNodes___nodes___guid',
  ContentNodesNodesId = 'contentNodes___nodes___id',
  ContentNodesNodesLink = 'contentNodes___nodes___link',
  ContentNodesNodesModified = 'contentNodes___nodes___modified',
  ContentNodesNodesModifiedGmt = 'contentNodes___nodes___modifiedGmt',
  ContentNodesNodesSlug = 'contentNodes___nodes___slug',
  ContentNodesNodesStatus = 'contentNodes___nodes___status',
  ContentNodesNodesTemplateTemplateName = 'contentNodes___nodes___template___templateName',
  ContentNodesNodesUri = 'contentNodes___nodes___uri',
  ContentNodesNodesNodeType = 'contentNodes___nodes___nodeType',
  DeleteWithUser = 'deleteWithUser',
  Description = 'description',
  ExcludeFromSearch = 'excludeFromSearch',
  GraphqlPluralName = 'graphqlPluralName',
  GraphqlSingleName = 'graphqlSingleName',
  HasArchive = 'hasArchive',
  Hierarchical = 'hierarchical',
  Id = 'id',
  IsFrontPage = 'isFrontPage',
  IsPostsPage = 'isPostsPage',
  Label = 'label',
  LabelsAddNew = 'labels___addNew',
  LabelsAddNewItem = 'labels___addNewItem',
  LabelsAllItems = 'labels___allItems',
  LabelsArchives = 'labels___archives',
  LabelsAttributes = 'labels___attributes',
  LabelsEditItem = 'labels___editItem',
  LabelsFeaturedImage = 'labels___featuredImage',
  LabelsFilterItemsList = 'labels___filterItemsList',
  LabelsInsertIntoItem = 'labels___insertIntoItem',
  LabelsItemsList = 'labels___itemsList',
  LabelsItemsListNavigation = 'labels___itemsListNavigation',
  LabelsMenuName = 'labels___menuName',
  LabelsName = 'labels___name',
  LabelsNewItem = 'labels___newItem',
  LabelsNotFound = 'labels___notFound',
  LabelsNotFoundInTrash = 'labels___notFoundInTrash',
  LabelsParentItemColon = 'labels___parentItemColon',
  LabelsRemoveFeaturedImage = 'labels___removeFeaturedImage',
  LabelsSearchItems = 'labels___searchItems',
  LabelsSetFeaturedImage = 'labels___setFeaturedImage',
  LabelsSingularName = 'labels___singularName',
  LabelsUploadedToThisItem = 'labels___uploadedToThisItem',
  LabelsUseFeaturedImage = 'labels___useFeaturedImage',
  LabelsViewItem = 'labels___viewItem',
  LabelsViewItems = 'labels___viewItems',
  MenuIcon = 'menuIcon',
  MenuPosition = 'menuPosition',
  Name = 'name',
  Public = 'public',
  PubliclyQueryable = 'publiclyQueryable',
  RestBase = 'restBase',
  RestControllerClass = 'restControllerClass',
  ShowInAdminBar = 'showInAdminBar',
  ShowInGraphql = 'showInGraphql',
  ShowInMenu = 'showInMenu',
  ShowInNavMenus = 'showInNavMenus',
  ShowInRest = 'showInRest',
  ShowUi = 'showUi',
  Uri = 'uri',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpContentTypeFilterInput = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  canExport?: Maybe<BooleanQueryOperatorInput>;
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: Maybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: Maybe<BooleanQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  excludeFromSearch?: Maybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hasArchive?: Maybe<BooleanQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  labels?: Maybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: Maybe<StringQueryOperatorInput>;
  menuPosition?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showInAdminBar?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpContentTypeFilterListInput = {
  elemMatch?: Maybe<WpContentTypeFilterInput>;
};

export type WpContentTypeGroupConnection = {
  __typename?: 'WpContentTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpContentTypeEdge>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<WpContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the ContentType type and the ContentNode type */
export type WpContentTypeToContentNodeConnection = {
  __typename?: 'WpContentTypeToContentNodeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpContentTypeToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type WpContentTypeToTaxonomyConnection = {
  __typename?: 'WpContentTypeToTaxonomyConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTaxonomy>>>;
};

export type WpContentTypeToTaxonomyConnectionFilterInput = {
  nodes?: Maybe<WpTaxonomyFilterListInput>;
};

export type WpDatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** The discussion setting type */
export type WpDiscussionSettings = {
  __typename?: 'WpDiscussionSettings';
  /** Allow people to submit comments on new posts. */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

export type WpDiscussionSettingsFilterInput = {
  defaultCommentStatus?: Maybe<StringQueryOperatorInput>;
  defaultPingStatus?: Maybe<StringQueryOperatorInput>;
};

export type WpEdge = {
  __typename?: 'WpEdge';
  next?: Maybe<Wp>;
  node: Wp;
  previous?: Maybe<Wp>;
};

export enum WpFieldsEnum {
  AllSettingsDiscussionSettingsDefaultCommentStatus = 'allSettings___discussionSettingsDefaultCommentStatus',
  AllSettingsDiscussionSettingsDefaultPingStatus = 'allSettings___discussionSettingsDefaultPingStatus',
  AllSettingsGeneralSettingsDateFormat = 'allSettings___generalSettingsDateFormat',
  AllSettingsGeneralSettingsDescription = 'allSettings___generalSettingsDescription',
  AllSettingsGeneralSettingsEmail = 'allSettings___generalSettingsEmail',
  AllSettingsGeneralSettingsLanguage = 'allSettings___generalSettingsLanguage',
  AllSettingsGeneralSettingsStartOfWeek = 'allSettings___generalSettingsStartOfWeek',
  AllSettingsGeneralSettingsTimeFormat = 'allSettings___generalSettingsTimeFormat',
  AllSettingsGeneralSettingsTimezone = 'allSettings___generalSettingsTimezone',
  AllSettingsGeneralSettingsTitle = 'allSettings___generalSettingsTitle',
  AllSettingsGeneralSettingsUrl = 'allSettings___generalSettingsUrl',
  AllSettingsReadingSettingsPostsPerPage = 'allSettings___readingSettingsPostsPerPage',
  AllSettingsWritingSettingsDefaultCategory = 'allSettings___writingSettingsDefaultCategory',
  AllSettingsWritingSettingsDefaultPostFormat = 'allSettings___writingSettingsDefaultPostFormat',
  AllSettingsWritingSettingsUseSmilies = 'allSettings___writingSettingsUseSmilies',
  DiscussionSettingsDefaultCommentStatus = 'discussionSettings___defaultCommentStatus',
  DiscussionSettingsDefaultPingStatus = 'discussionSettings___defaultPingStatus',
  GeneralSettingsDateFormat = 'generalSettings___dateFormat',
  GeneralSettingsDescription = 'generalSettings___description',
  GeneralSettingsEmail = 'generalSettings___email',
  GeneralSettingsLanguage = 'generalSettings___language',
  GeneralSettingsStartOfWeek = 'generalSettings___startOfWeek',
  GeneralSettingsTimeFormat = 'generalSettings___timeFormat',
  GeneralSettingsTimezone = 'generalSettings___timezone',
  GeneralSettingsTitle = 'generalSettings___title',
  GeneralSettingsUrl = 'generalSettings___url',
  ReadingSettingsPostsPerPage = 'readingSettings___postsPerPage',
  WpGatsbyArePrettyPermalinksEnabled = 'wpGatsby___arePrettyPermalinksEnabled',
  WritingSettingsDefaultCategory = 'writingSettings___defaultCategory',
  WritingSettingsDefaultPostFormat = 'writingSettings___defaultPostFormat',
  WritingSettingsUseSmilies = 'writingSettings___useSmilies',
  NodeType = 'nodeType',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpFilterInput = {
  allSettings?: Maybe<WpSettingsFilterInput>;
  discussionSettings?: Maybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: Maybe<WpGeneralSettingsFilterInput>;
  readingSettings?: Maybe<WpReadingSettingsFilterInput>;
  wpGatsby?: Maybe<WpWpGatsbyFilterInput>;
  writingSettings?: Maybe<WpWritingSettingsFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

/** The general setting type */
export type WpGeneralSettings = {
  __typename?: 'WpGeneralSettings';
  /** A date format for all date strings. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Site tagline. */
  description?: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  email?: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  language?: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  timeFormat?: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  timezone?: Maybe<Scalars['String']>;
  /** Site title. */
  title?: Maybe<Scalars['String']>;
  /** Site URL. */
  url?: Maybe<Scalars['String']>;
};

export type WpGeneralSettingsFilterInput = {
  dateFormat?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  startOfWeek?: Maybe<IntQueryOperatorInput>;
  timeFormat?: Maybe<StringQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type WpGroupConnection = {
  __typename?: 'WpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpEdge>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpHierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeAncestorsConnection = {
  __typename?: 'WpHierarchicalContentNodeToContentNodeAncestorsConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeChildrenConnection = {
  __typename?: 'WpHierarchicalContentNodeToContentNodeChildrenConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToParentContentNodeConnectionEdge = {
  __typename?: 'WpHierarchicalContentNodeToParentContentNodeConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

export type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput = {
  node?: Maybe<WpContentNodeFilterInput>;
};

export type WpHierarchicalTermNode = {
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** File details for a Media Item */
export type WpMediaDetails = {
  __typename?: 'WpMediaDetails';
  /** The height of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  meta?: Maybe<WpMediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<WpMediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};

export type WpMediaDetailsFilterInput = {
  file?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  meta?: Maybe<WpMediaItemMetaFilterInput>;
  sizes?: Maybe<WpMediaSizeFilterListInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

/** The mediaItem type */
export type WpMediaItem = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithAuthor & WpNodeWithComments & WpHierarchicalContentNode & {
  __typename?: 'WpMediaItem';
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the mediaItem type and the Comment type */
  comments?: Maybe<WpMediaItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The filesize in bytes of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<WpMediaDetails>;
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  /** The mime type of the mediaItem */
  mimeType?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /**
   * The srcset attribute specifies the URL of the image to use in different
   * situations. It is a comma separated string of urls and their widths.
   */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  /** @deprecated MediaItem.remoteFile was renamed to localFile */
  remoteFile?: Maybe<File>;
  localFile?: Maybe<File>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The mediaItem type */
export type WpMediaItemDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpMediaItemConnection = {
  __typename?: 'WpMediaItemConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpMediaItemEdge>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpMediaItemGroupConnection>;
};


export type WpMediaItemConnectionDistinctArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMediaItemFieldsEnum;
};

export type WpMediaItemEdge = {
  __typename?: 'WpMediaItemEdge';
  next?: Maybe<WpMediaItem>;
  node: WpMediaItem;
  previous?: Maybe<WpMediaItem>;
};

export enum WpMediaItemFieldsEnum {
  AltText = 'altText',
  AncestorsNodes = 'ancestors___nodes',
  AncestorsNodesDatabaseId = 'ancestors___nodes___databaseId',
  AncestorsNodesDate = 'ancestors___nodes___date',
  AncestorsNodesDateGmt = 'ancestors___nodes___dateGmt',
  AncestorsNodesDesiredSlug = 'ancestors___nodes___desiredSlug',
  AncestorsNodesEnclosure = 'ancestors___nodes___enclosure',
  AncestorsNodesGuid = 'ancestors___nodes___guid',
  AncestorsNodesId = 'ancestors___nodes___id',
  AncestorsNodesLink = 'ancestors___nodes___link',
  AncestorsNodesModified = 'ancestors___nodes___modified',
  AncestorsNodesModifiedGmt = 'ancestors___nodes___modifiedGmt',
  AncestorsNodesSlug = 'ancestors___nodes___slug',
  AncestorsNodesStatus = 'ancestors___nodes___status',
  AncestorsNodesTemplateTemplateName = 'ancestors___nodes___template___templateName',
  AncestorsNodesUri = 'ancestors___nodes___uri',
  AncestorsNodesNodeType = 'ancestors___nodes___nodeType',
  AuthorNodeAvatarDefault = 'author___node___avatar___default',
  AuthorNodeAvatarExtraAttr = 'author___node___avatar___extraAttr',
  AuthorNodeAvatarForceDefault = 'author___node___avatar___forceDefault',
  AuthorNodeAvatarFoundAvatar = 'author___node___avatar___foundAvatar',
  AuthorNodeAvatarHeight = 'author___node___avatar___height',
  AuthorNodeAvatarRating = 'author___node___avatar___rating',
  AuthorNodeAvatarScheme = 'author___node___avatar___scheme',
  AuthorNodeAvatarSize = 'author___node___avatar___size',
  AuthorNodeAvatarUrl = 'author___node___avatar___url',
  AuthorNodeAvatarWidth = 'author___node___avatar___width',
  AuthorNodeCapKey = 'author___node___capKey',
  AuthorNodeCapabilities = 'author___node___capabilities',
  AuthorNodeCommentsNodes = 'author___node___comments___nodes',
  AuthorNodeDatabaseId = 'author___node___databaseId',
  AuthorNodeDescription = 'author___node___description',
  AuthorNodeEmail = 'author___node___email',
  AuthorNodeExtraCapabilities = 'author___node___extraCapabilities',
  AuthorNodeFirstName = 'author___node___firstName',
  AuthorNodeId = 'author___node___id',
  AuthorNodeLastName = 'author___node___lastName',
  AuthorNodeLocale = 'author___node___locale',
  AuthorNodeName = 'author___node___name',
  AuthorNodeNicename = 'author___node___nicename',
  AuthorNodeNickname = 'author___node___nickname',
  AuthorNodePagesNodes = 'author___node___pages___nodes',
  AuthorNodePostsNodes = 'author___node___posts___nodes',
  AuthorNodeRegisteredDate = 'author___node___registeredDate',
  AuthorNodeRolesNodes = 'author___node___roles___nodes',
  AuthorNodeSlug = 'author___node___slug',
  AuthorNodeUri = 'author___node___uri',
  AuthorNodeUrl = 'author___node___url',
  AuthorNodeUsername = 'author___node___username',
  AuthorNodeNodeType = 'author___node___nodeType',
  AuthorNodeParentId = 'author___node___parent___id',
  AuthorNodeParentChildren = 'author___node___parent___children',
  AuthorNodeChildren = 'author___node___children',
  AuthorNodeChildrenId = 'author___node___children___id',
  AuthorNodeChildrenChildren = 'author___node___children___children',
  AuthorNodeInternalContent = 'author___node___internal___content',
  AuthorNodeInternalContentDigest = 'author___node___internal___contentDigest',
  AuthorNodeInternalDescription = 'author___node___internal___description',
  AuthorNodeInternalFieldOwners = 'author___node___internal___fieldOwners',
  AuthorNodeInternalIgnoreType = 'author___node___internal___ignoreType',
  AuthorNodeInternalMediaType = 'author___node___internal___mediaType',
  AuthorNodeInternalOwner = 'author___node___internal___owner',
  AuthorNodeInternalType = 'author___node___internal___type',
  AuthorDatabaseId = 'authorDatabaseId',
  AuthorId = 'authorId',
  Caption = 'caption',
  WpChildrenNodes = 'wpChildren___nodes',
  WpChildrenNodesDatabaseId = 'wpChildren___nodes___databaseId',
  WpChildrenNodesDate = 'wpChildren___nodes___date',
  WpChildrenNodesDateGmt = 'wpChildren___nodes___dateGmt',
  WpChildrenNodesDesiredSlug = 'wpChildren___nodes___desiredSlug',
  WpChildrenNodesEnclosure = 'wpChildren___nodes___enclosure',
  WpChildrenNodesGuid = 'wpChildren___nodes___guid',
  WpChildrenNodesId = 'wpChildren___nodes___id',
  WpChildrenNodesLink = 'wpChildren___nodes___link',
  WpChildrenNodesModified = 'wpChildren___nodes___modified',
  WpChildrenNodesModifiedGmt = 'wpChildren___nodes___modifiedGmt',
  WpChildrenNodesSlug = 'wpChildren___nodes___slug',
  WpChildrenNodesStatus = 'wpChildren___nodes___status',
  WpChildrenNodesTemplateTemplateName = 'wpChildren___nodes___template___templateName',
  WpChildrenNodesUri = 'wpChildren___nodes___uri',
  WpChildrenNodesNodeType = 'wpChildren___nodes___nodeType',
  CommentCount = 'commentCount',
  CommentStatus = 'commentStatus',
  CommentsNodes = 'comments___nodes',
  CommentsNodesAgent = 'comments___nodes___agent',
  CommentsNodesApproved = 'comments___nodes___approved',
  CommentsNodesAuthorIp = 'comments___nodes___authorIp',
  CommentsNodesContent = 'comments___nodes___content',
  CommentsNodesDatabaseId = 'comments___nodes___databaseId',
  CommentsNodesDate = 'comments___nodes___date',
  CommentsNodesDateGmt = 'comments___nodes___dateGmt',
  CommentsNodesId = 'comments___nodes___id',
  CommentsNodesKarma = 'comments___nodes___karma',
  CommentsNodesParentDatabaseId = 'comments___nodes___parentDatabaseId',
  CommentsNodesParentId = 'comments___nodes___parentId',
  CommentsNodesRepliesNodes = 'comments___nodes___replies___nodes',
  CommentsNodesType = 'comments___nodes___type',
  CommentsNodesNodeType = 'comments___nodes___nodeType',
  CommentsNodesParentId = 'comments___nodes___parent___id',
  CommentsNodesParentChildren = 'comments___nodes___parent___children',
  CommentsNodesChildren = 'comments___nodes___children',
  CommentsNodesChildrenId = 'comments___nodes___children___id',
  CommentsNodesChildrenChildren = 'comments___nodes___children___children',
  CommentsNodesInternalContent = 'comments___nodes___internal___content',
  CommentsNodesInternalContentDigest = 'comments___nodes___internal___contentDigest',
  CommentsNodesInternalDescription = 'comments___nodes___internal___description',
  CommentsNodesInternalFieldOwners = 'comments___nodes___internal___fieldOwners',
  CommentsNodesInternalIgnoreType = 'comments___nodes___internal___ignoreType',
  CommentsNodesInternalMediaType = 'comments___nodes___internal___mediaType',
  CommentsNodesInternalOwner = 'comments___nodes___internal___owner',
  CommentsNodesInternalType = 'comments___nodes___internal___type',
  ContentTypeNodeArchivePath = 'contentType___node___archivePath',
  ContentTypeNodeCanExport = 'contentType___node___canExport',
  ContentTypeNodeConnectedTaxonomiesNodes = 'contentType___node___connectedTaxonomies___nodes',
  ContentTypeNodeContentNodesNodes = 'contentType___node___contentNodes___nodes',
  ContentTypeNodeDeleteWithUser = 'contentType___node___deleteWithUser',
  ContentTypeNodeDescription = 'contentType___node___description',
  ContentTypeNodeExcludeFromSearch = 'contentType___node___excludeFromSearch',
  ContentTypeNodeGraphqlPluralName = 'contentType___node___graphqlPluralName',
  ContentTypeNodeGraphqlSingleName = 'contentType___node___graphqlSingleName',
  ContentTypeNodeHasArchive = 'contentType___node___hasArchive',
  ContentTypeNodeHierarchical = 'contentType___node___hierarchical',
  ContentTypeNodeId = 'contentType___node___id',
  ContentTypeNodeIsFrontPage = 'contentType___node___isFrontPage',
  ContentTypeNodeIsPostsPage = 'contentType___node___isPostsPage',
  ContentTypeNodeLabel = 'contentType___node___label',
  ContentTypeNodeLabelsAddNew = 'contentType___node___labels___addNew',
  ContentTypeNodeLabelsAddNewItem = 'contentType___node___labels___addNewItem',
  ContentTypeNodeLabelsAllItems = 'contentType___node___labels___allItems',
  ContentTypeNodeLabelsArchives = 'contentType___node___labels___archives',
  ContentTypeNodeLabelsAttributes = 'contentType___node___labels___attributes',
  ContentTypeNodeLabelsEditItem = 'contentType___node___labels___editItem',
  ContentTypeNodeLabelsFeaturedImage = 'contentType___node___labels___featuredImage',
  ContentTypeNodeLabelsFilterItemsList = 'contentType___node___labels___filterItemsList',
  ContentTypeNodeLabelsInsertIntoItem = 'contentType___node___labels___insertIntoItem',
  ContentTypeNodeLabelsItemsList = 'contentType___node___labels___itemsList',
  ContentTypeNodeLabelsItemsListNavigation = 'contentType___node___labels___itemsListNavigation',
  ContentTypeNodeLabelsMenuName = 'contentType___node___labels___menuName',
  ContentTypeNodeLabelsName = 'contentType___node___labels___name',
  ContentTypeNodeLabelsNewItem = 'contentType___node___labels___newItem',
  ContentTypeNodeLabelsNotFound = 'contentType___node___labels___notFound',
  ContentTypeNodeLabelsNotFoundInTrash = 'contentType___node___labels___notFoundInTrash',
  ContentTypeNodeLabelsParentItemColon = 'contentType___node___labels___parentItemColon',
  ContentTypeNodeLabelsRemoveFeaturedImage = 'contentType___node___labels___removeFeaturedImage',
  ContentTypeNodeLabelsSearchItems = 'contentType___node___labels___searchItems',
  ContentTypeNodeLabelsSetFeaturedImage = 'contentType___node___labels___setFeaturedImage',
  ContentTypeNodeLabelsSingularName = 'contentType___node___labels___singularName',
  ContentTypeNodeLabelsUploadedToThisItem = 'contentType___node___labels___uploadedToThisItem',
  ContentTypeNodeLabelsUseFeaturedImage = 'contentType___node___labels___useFeaturedImage',
  ContentTypeNodeLabelsViewItem = 'contentType___node___labels___viewItem',
  ContentTypeNodeLabelsViewItems = 'contentType___node___labels___viewItems',
  ContentTypeNodeMenuIcon = 'contentType___node___menuIcon',
  ContentTypeNodeMenuPosition = 'contentType___node___menuPosition',
  ContentTypeNodeName = 'contentType___node___name',
  ContentTypeNodePublic = 'contentType___node___public',
  ContentTypeNodePubliclyQueryable = 'contentType___node___publiclyQueryable',
  ContentTypeNodeRestBase = 'contentType___node___restBase',
  ContentTypeNodeRestControllerClass = 'contentType___node___restControllerClass',
  ContentTypeNodeShowInAdminBar = 'contentType___node___showInAdminBar',
  ContentTypeNodeShowInGraphql = 'contentType___node___showInGraphql',
  ContentTypeNodeShowInMenu = 'contentType___node___showInMenu',
  ContentTypeNodeShowInNavMenus = 'contentType___node___showInNavMenus',
  ContentTypeNodeShowInRest = 'contentType___node___showInRest',
  ContentTypeNodeShowUi = 'contentType___node___showUi',
  ContentTypeNodeUri = 'contentType___node___uri',
  ContentTypeNodeNodeType = 'contentType___node___nodeType',
  ContentTypeNodeParentId = 'contentType___node___parent___id',
  ContentTypeNodeParentChildren = 'contentType___node___parent___children',
  ContentTypeNodeChildren = 'contentType___node___children',
  ContentTypeNodeChildrenId = 'contentType___node___children___id',
  ContentTypeNodeChildrenChildren = 'contentType___node___children___children',
  ContentTypeNodeInternalContent = 'contentType___node___internal___content',
  ContentTypeNodeInternalContentDigest = 'contentType___node___internal___contentDigest',
  ContentTypeNodeInternalDescription = 'contentType___node___internal___description',
  ContentTypeNodeInternalFieldOwners = 'contentType___node___internal___fieldOwners',
  ContentTypeNodeInternalIgnoreType = 'contentType___node___internal___ignoreType',
  ContentTypeNodeInternalMediaType = 'contentType___node___internal___mediaType',
  ContentTypeNodeInternalOwner = 'contentType___node___internal___owner',
  ContentTypeNodeInternalType = 'contentType___node___internal___type',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  Description = 'description',
  DesiredSlug = 'desiredSlug',
  Enclosure = 'enclosure',
  FileSize = 'fileSize',
  Guid = 'guid',
  Id = 'id',
  LastEditedByNodeAvatarDefault = 'lastEditedBy___node___avatar___default',
  LastEditedByNodeAvatarExtraAttr = 'lastEditedBy___node___avatar___extraAttr',
  LastEditedByNodeAvatarForceDefault = 'lastEditedBy___node___avatar___forceDefault',
  LastEditedByNodeAvatarFoundAvatar = 'lastEditedBy___node___avatar___foundAvatar',
  LastEditedByNodeAvatarHeight = 'lastEditedBy___node___avatar___height',
  LastEditedByNodeAvatarRating = 'lastEditedBy___node___avatar___rating',
  LastEditedByNodeAvatarScheme = 'lastEditedBy___node___avatar___scheme',
  LastEditedByNodeAvatarSize = 'lastEditedBy___node___avatar___size',
  LastEditedByNodeAvatarUrl = 'lastEditedBy___node___avatar___url',
  LastEditedByNodeAvatarWidth = 'lastEditedBy___node___avatar___width',
  LastEditedByNodeCapKey = 'lastEditedBy___node___capKey',
  LastEditedByNodeCapabilities = 'lastEditedBy___node___capabilities',
  LastEditedByNodeCommentsNodes = 'lastEditedBy___node___comments___nodes',
  LastEditedByNodeDatabaseId = 'lastEditedBy___node___databaseId',
  LastEditedByNodeDescription = 'lastEditedBy___node___description',
  LastEditedByNodeEmail = 'lastEditedBy___node___email',
  LastEditedByNodeExtraCapabilities = 'lastEditedBy___node___extraCapabilities',
  LastEditedByNodeFirstName = 'lastEditedBy___node___firstName',
  LastEditedByNodeId = 'lastEditedBy___node___id',
  LastEditedByNodeLastName = 'lastEditedBy___node___lastName',
  LastEditedByNodeLocale = 'lastEditedBy___node___locale',
  LastEditedByNodeName = 'lastEditedBy___node___name',
  LastEditedByNodeNicename = 'lastEditedBy___node___nicename',
  LastEditedByNodeNickname = 'lastEditedBy___node___nickname',
  LastEditedByNodePagesNodes = 'lastEditedBy___node___pages___nodes',
  LastEditedByNodePostsNodes = 'lastEditedBy___node___posts___nodes',
  LastEditedByNodeRegisteredDate = 'lastEditedBy___node___registeredDate',
  LastEditedByNodeRolesNodes = 'lastEditedBy___node___roles___nodes',
  LastEditedByNodeSlug = 'lastEditedBy___node___slug',
  LastEditedByNodeUri = 'lastEditedBy___node___uri',
  LastEditedByNodeUrl = 'lastEditedBy___node___url',
  LastEditedByNodeUsername = 'lastEditedBy___node___username',
  LastEditedByNodeNodeType = 'lastEditedBy___node___nodeType',
  LastEditedByNodeParentId = 'lastEditedBy___node___parent___id',
  LastEditedByNodeParentChildren = 'lastEditedBy___node___parent___children',
  LastEditedByNodeChildren = 'lastEditedBy___node___children',
  LastEditedByNodeChildrenId = 'lastEditedBy___node___children___id',
  LastEditedByNodeChildrenChildren = 'lastEditedBy___node___children___children',
  LastEditedByNodeInternalContent = 'lastEditedBy___node___internal___content',
  LastEditedByNodeInternalContentDigest = 'lastEditedBy___node___internal___contentDigest',
  LastEditedByNodeInternalDescription = 'lastEditedBy___node___internal___description',
  LastEditedByNodeInternalFieldOwners = 'lastEditedBy___node___internal___fieldOwners',
  LastEditedByNodeInternalIgnoreType = 'lastEditedBy___node___internal___ignoreType',
  LastEditedByNodeInternalMediaType = 'lastEditedBy___node___internal___mediaType',
  LastEditedByNodeInternalOwner = 'lastEditedBy___node___internal___owner',
  LastEditedByNodeInternalType = 'lastEditedBy___node___internal___type',
  Link = 'link',
  MediaDetailsFile = 'mediaDetails___file',
  MediaDetailsHeight = 'mediaDetails___height',
  MediaDetailsMetaAperture = 'mediaDetails___meta___aperture',
  MediaDetailsMetaCamera = 'mediaDetails___meta___camera',
  MediaDetailsMetaCaption = 'mediaDetails___meta___caption',
  MediaDetailsMetaCopyright = 'mediaDetails___meta___copyright',
  MediaDetailsMetaCreatedTimestamp = 'mediaDetails___meta___createdTimestamp',
  MediaDetailsMetaCredit = 'mediaDetails___meta___credit',
  MediaDetailsMetaFocalLength = 'mediaDetails___meta___focalLength',
  MediaDetailsMetaIso = 'mediaDetails___meta___iso',
  MediaDetailsMetaKeywords = 'mediaDetails___meta___keywords',
  MediaDetailsMetaOrientation = 'mediaDetails___meta___orientation',
  MediaDetailsMetaShutterSpeed = 'mediaDetails___meta___shutterSpeed',
  MediaDetailsMetaTitle = 'mediaDetails___meta___title',
  MediaDetailsSizes = 'mediaDetails___sizes',
  MediaDetailsSizesFile = 'mediaDetails___sizes___file',
  MediaDetailsSizesFileSize = 'mediaDetails___sizes___fileSize',
  MediaDetailsSizesHeight = 'mediaDetails___sizes___height',
  MediaDetailsSizesMimeType = 'mediaDetails___sizes___mimeType',
  MediaDetailsSizesName = 'mediaDetails___sizes___name',
  MediaDetailsSizesSourceUrl = 'mediaDetails___sizes___sourceUrl',
  MediaDetailsSizesWidth = 'mediaDetails___sizes___width',
  MediaDetailsWidth = 'mediaDetails___width',
  MediaItemUrl = 'mediaItemUrl',
  MediaType = 'mediaType',
  MimeType = 'mimeType',
  Modified = 'modified',
  ModifiedGmt = 'modifiedGmt',
  WpParentNodeDatabaseId = 'wpParent___node___databaseId',
  WpParentNodeDate = 'wpParent___node___date',
  WpParentNodeDateGmt = 'wpParent___node___dateGmt',
  WpParentNodeDesiredSlug = 'wpParent___node___desiredSlug',
  WpParentNodeEnclosure = 'wpParent___node___enclosure',
  WpParentNodeGuid = 'wpParent___node___guid',
  WpParentNodeId = 'wpParent___node___id',
  WpParentNodeLink = 'wpParent___node___link',
  WpParentNodeModified = 'wpParent___node___modified',
  WpParentNodeModifiedGmt = 'wpParent___node___modifiedGmt',
  WpParentNodeSlug = 'wpParent___node___slug',
  WpParentNodeStatus = 'wpParent___node___status',
  WpParentNodeTemplateTemplateName = 'wpParent___node___template___templateName',
  WpParentNodeUri = 'wpParent___node___uri',
  WpParentNodeNodeType = 'wpParent___node___nodeType',
  ParentDatabaseId = 'parentDatabaseId',
  ParentId = 'parentId',
  Sizes = 'sizes',
  Slug = 'slug',
  SourceUrl = 'sourceUrl',
  SrcSet = 'srcSet',
  Status = 'status',
  TemplateTemplateName = 'template___templateName',
  Title = 'title',
  Uri = 'uri',
  NodeType = 'nodeType',
  RemoteFileSourceInstanceName = 'remoteFile___sourceInstanceName',
  RemoteFileAbsolutePath = 'remoteFile___absolutePath',
  RemoteFileRelativePath = 'remoteFile___relativePath',
  RemoteFileExtension = 'remoteFile___extension',
  RemoteFileSize = 'remoteFile___size',
  RemoteFilePrettySize = 'remoteFile___prettySize',
  RemoteFileModifiedTime = 'remoteFile___modifiedTime',
  RemoteFileAccessTime = 'remoteFile___accessTime',
  RemoteFileChangeTime = 'remoteFile___changeTime',
  RemoteFileBirthTime = 'remoteFile___birthTime',
  RemoteFileRoot = 'remoteFile___root',
  RemoteFileDir = 'remoteFile___dir',
  RemoteFileBase = 'remoteFile___base',
  RemoteFileExt = 'remoteFile___ext',
  RemoteFileName = 'remoteFile___name',
  RemoteFileRelativeDirectory = 'remoteFile___relativeDirectory',
  RemoteFileDev = 'remoteFile___dev',
  RemoteFileMode = 'remoteFile___mode',
  RemoteFileNlink = 'remoteFile___nlink',
  RemoteFileUid = 'remoteFile___uid',
  RemoteFileGid = 'remoteFile___gid',
  RemoteFileRdev = 'remoteFile___rdev',
  RemoteFileIno = 'remoteFile___ino',
  RemoteFileAtimeMs = 'remoteFile___atimeMs',
  RemoteFileMtimeMs = 'remoteFile___mtimeMs',
  RemoteFileCtimeMs = 'remoteFile___ctimeMs',
  RemoteFileAtime = 'remoteFile___atime',
  RemoteFileMtime = 'remoteFile___mtime',
  RemoteFileCtime = 'remoteFile___ctime',
  RemoteFileBirthtime = 'remoteFile___birthtime',
  RemoteFileBirthtimeMs = 'remoteFile___birthtimeMs',
  RemoteFileBlksize = 'remoteFile___blksize',
  RemoteFileBlocks = 'remoteFile___blocks',
  RemoteFilePublicUrl = 'remoteFile___publicURL',
  RemoteFileChildrenImageSharp = 'remoteFile___childrenImageSharp',
  RemoteFileChildrenImageSharpFixedBase64 = 'remoteFile___childrenImageSharp___fixed___base64',
  RemoteFileChildrenImageSharpFixedTracedSvg = 'remoteFile___childrenImageSharp___fixed___tracedSVG',
  RemoteFileChildrenImageSharpFixedAspectRatio = 'remoteFile___childrenImageSharp___fixed___aspectRatio',
  RemoteFileChildrenImageSharpFixedWidth = 'remoteFile___childrenImageSharp___fixed___width',
  RemoteFileChildrenImageSharpFixedHeight = 'remoteFile___childrenImageSharp___fixed___height',
  RemoteFileChildrenImageSharpFixedSrc = 'remoteFile___childrenImageSharp___fixed___src',
  RemoteFileChildrenImageSharpFixedSrcSet = 'remoteFile___childrenImageSharp___fixed___srcSet',
  RemoteFileChildrenImageSharpFixedSrcWebp = 'remoteFile___childrenImageSharp___fixed___srcWebp',
  RemoteFileChildrenImageSharpFixedSrcSetWebp = 'remoteFile___childrenImageSharp___fixed___srcSetWebp',
  RemoteFileChildrenImageSharpFixedOriginalName = 'remoteFile___childrenImageSharp___fixed___originalName',
  RemoteFileChildrenImageSharpResolutionsBase64 = 'remoteFile___childrenImageSharp___resolutions___base64',
  RemoteFileChildrenImageSharpResolutionsTracedSvg = 'remoteFile___childrenImageSharp___resolutions___tracedSVG',
  RemoteFileChildrenImageSharpResolutionsAspectRatio = 'remoteFile___childrenImageSharp___resolutions___aspectRatio',
  RemoteFileChildrenImageSharpResolutionsWidth = 'remoteFile___childrenImageSharp___resolutions___width',
  RemoteFileChildrenImageSharpResolutionsHeight = 'remoteFile___childrenImageSharp___resolutions___height',
  RemoteFileChildrenImageSharpResolutionsSrc = 'remoteFile___childrenImageSharp___resolutions___src',
  RemoteFileChildrenImageSharpResolutionsSrcSet = 'remoteFile___childrenImageSharp___resolutions___srcSet',
  RemoteFileChildrenImageSharpResolutionsSrcWebp = 'remoteFile___childrenImageSharp___resolutions___srcWebp',
  RemoteFileChildrenImageSharpResolutionsSrcSetWebp = 'remoteFile___childrenImageSharp___resolutions___srcSetWebp',
  RemoteFileChildrenImageSharpResolutionsOriginalName = 'remoteFile___childrenImageSharp___resolutions___originalName',
  RemoteFileChildrenImageSharpFluidBase64 = 'remoteFile___childrenImageSharp___fluid___base64',
  RemoteFileChildrenImageSharpFluidTracedSvg = 'remoteFile___childrenImageSharp___fluid___tracedSVG',
  RemoteFileChildrenImageSharpFluidAspectRatio = 'remoteFile___childrenImageSharp___fluid___aspectRatio',
  RemoteFileChildrenImageSharpFluidSrc = 'remoteFile___childrenImageSharp___fluid___src',
  RemoteFileChildrenImageSharpFluidSrcSet = 'remoteFile___childrenImageSharp___fluid___srcSet',
  RemoteFileChildrenImageSharpFluidSrcWebp = 'remoteFile___childrenImageSharp___fluid___srcWebp',
  RemoteFileChildrenImageSharpFluidSrcSetWebp = 'remoteFile___childrenImageSharp___fluid___srcSetWebp',
  RemoteFileChildrenImageSharpFluidSizes = 'remoteFile___childrenImageSharp___fluid___sizes',
  RemoteFileChildrenImageSharpFluidOriginalImg = 'remoteFile___childrenImageSharp___fluid___originalImg',
  RemoteFileChildrenImageSharpFluidOriginalName = 'remoteFile___childrenImageSharp___fluid___originalName',
  RemoteFileChildrenImageSharpFluidPresentationWidth = 'remoteFile___childrenImageSharp___fluid___presentationWidth',
  RemoteFileChildrenImageSharpFluidPresentationHeight = 'remoteFile___childrenImageSharp___fluid___presentationHeight',
  RemoteFileChildrenImageSharpSizesBase64 = 'remoteFile___childrenImageSharp___sizes___base64',
  RemoteFileChildrenImageSharpSizesTracedSvg = 'remoteFile___childrenImageSharp___sizes___tracedSVG',
  RemoteFileChildrenImageSharpSizesAspectRatio = 'remoteFile___childrenImageSharp___sizes___aspectRatio',
  RemoteFileChildrenImageSharpSizesSrc = 'remoteFile___childrenImageSharp___sizes___src',
  RemoteFileChildrenImageSharpSizesSrcSet = 'remoteFile___childrenImageSharp___sizes___srcSet',
  RemoteFileChildrenImageSharpSizesSrcWebp = 'remoteFile___childrenImageSharp___sizes___srcWebp',
  RemoteFileChildrenImageSharpSizesSrcSetWebp = 'remoteFile___childrenImageSharp___sizes___srcSetWebp',
  RemoteFileChildrenImageSharpSizesSizes = 'remoteFile___childrenImageSharp___sizes___sizes',
  RemoteFileChildrenImageSharpSizesOriginalImg = 'remoteFile___childrenImageSharp___sizes___originalImg',
  RemoteFileChildrenImageSharpSizesOriginalName = 'remoteFile___childrenImageSharp___sizes___originalName',
  RemoteFileChildrenImageSharpSizesPresentationWidth = 'remoteFile___childrenImageSharp___sizes___presentationWidth',
  RemoteFileChildrenImageSharpSizesPresentationHeight = 'remoteFile___childrenImageSharp___sizes___presentationHeight',
  RemoteFileChildrenImageSharpGatsbyImageData = 'remoteFile___childrenImageSharp___gatsbyImageData',
  RemoteFileChildrenImageSharpOriginalWidth = 'remoteFile___childrenImageSharp___original___width',
  RemoteFileChildrenImageSharpOriginalHeight = 'remoteFile___childrenImageSharp___original___height',
  RemoteFileChildrenImageSharpOriginalSrc = 'remoteFile___childrenImageSharp___original___src',
  RemoteFileChildrenImageSharpResizeSrc = 'remoteFile___childrenImageSharp___resize___src',
  RemoteFileChildrenImageSharpResizeTracedSvg = 'remoteFile___childrenImageSharp___resize___tracedSVG',
  RemoteFileChildrenImageSharpResizeWidth = 'remoteFile___childrenImageSharp___resize___width',
  RemoteFileChildrenImageSharpResizeHeight = 'remoteFile___childrenImageSharp___resize___height',
  RemoteFileChildrenImageSharpResizeAspectRatio = 'remoteFile___childrenImageSharp___resize___aspectRatio',
  RemoteFileChildrenImageSharpResizeOriginalName = 'remoteFile___childrenImageSharp___resize___originalName',
  RemoteFileChildrenImageSharpId = 'remoteFile___childrenImageSharp___id',
  RemoteFileChildrenImageSharpParentId = 'remoteFile___childrenImageSharp___parent___id',
  RemoteFileChildrenImageSharpParentChildren = 'remoteFile___childrenImageSharp___parent___children',
  RemoteFileChildrenImageSharpChildren = 'remoteFile___childrenImageSharp___children',
  RemoteFileChildrenImageSharpChildrenId = 'remoteFile___childrenImageSharp___children___id',
  RemoteFileChildrenImageSharpChildrenChildren = 'remoteFile___childrenImageSharp___children___children',
  RemoteFileChildrenImageSharpInternalContent = 'remoteFile___childrenImageSharp___internal___content',
  RemoteFileChildrenImageSharpInternalContentDigest = 'remoteFile___childrenImageSharp___internal___contentDigest',
  RemoteFileChildrenImageSharpInternalDescription = 'remoteFile___childrenImageSharp___internal___description',
  RemoteFileChildrenImageSharpInternalFieldOwners = 'remoteFile___childrenImageSharp___internal___fieldOwners',
  RemoteFileChildrenImageSharpInternalIgnoreType = 'remoteFile___childrenImageSharp___internal___ignoreType',
  RemoteFileChildrenImageSharpInternalMediaType = 'remoteFile___childrenImageSharp___internal___mediaType',
  RemoteFileChildrenImageSharpInternalOwner = 'remoteFile___childrenImageSharp___internal___owner',
  RemoteFileChildrenImageSharpInternalType = 'remoteFile___childrenImageSharp___internal___type',
  RemoteFileChildImageSharpFixedBase64 = 'remoteFile___childImageSharp___fixed___base64',
  RemoteFileChildImageSharpFixedTracedSvg = 'remoteFile___childImageSharp___fixed___tracedSVG',
  RemoteFileChildImageSharpFixedAspectRatio = 'remoteFile___childImageSharp___fixed___aspectRatio',
  RemoteFileChildImageSharpFixedWidth = 'remoteFile___childImageSharp___fixed___width',
  RemoteFileChildImageSharpFixedHeight = 'remoteFile___childImageSharp___fixed___height',
  RemoteFileChildImageSharpFixedSrc = 'remoteFile___childImageSharp___fixed___src',
  RemoteFileChildImageSharpFixedSrcSet = 'remoteFile___childImageSharp___fixed___srcSet',
  RemoteFileChildImageSharpFixedSrcWebp = 'remoteFile___childImageSharp___fixed___srcWebp',
  RemoteFileChildImageSharpFixedSrcSetWebp = 'remoteFile___childImageSharp___fixed___srcSetWebp',
  RemoteFileChildImageSharpFixedOriginalName = 'remoteFile___childImageSharp___fixed___originalName',
  RemoteFileChildImageSharpResolutionsBase64 = 'remoteFile___childImageSharp___resolutions___base64',
  RemoteFileChildImageSharpResolutionsTracedSvg = 'remoteFile___childImageSharp___resolutions___tracedSVG',
  RemoteFileChildImageSharpResolutionsAspectRatio = 'remoteFile___childImageSharp___resolutions___aspectRatio',
  RemoteFileChildImageSharpResolutionsWidth = 'remoteFile___childImageSharp___resolutions___width',
  RemoteFileChildImageSharpResolutionsHeight = 'remoteFile___childImageSharp___resolutions___height',
  RemoteFileChildImageSharpResolutionsSrc = 'remoteFile___childImageSharp___resolutions___src',
  RemoteFileChildImageSharpResolutionsSrcSet = 'remoteFile___childImageSharp___resolutions___srcSet',
  RemoteFileChildImageSharpResolutionsSrcWebp = 'remoteFile___childImageSharp___resolutions___srcWebp',
  RemoteFileChildImageSharpResolutionsSrcSetWebp = 'remoteFile___childImageSharp___resolutions___srcSetWebp',
  RemoteFileChildImageSharpResolutionsOriginalName = 'remoteFile___childImageSharp___resolutions___originalName',
  RemoteFileChildImageSharpFluidBase64 = 'remoteFile___childImageSharp___fluid___base64',
  RemoteFileChildImageSharpFluidTracedSvg = 'remoteFile___childImageSharp___fluid___tracedSVG',
  RemoteFileChildImageSharpFluidAspectRatio = 'remoteFile___childImageSharp___fluid___aspectRatio',
  RemoteFileChildImageSharpFluidSrc = 'remoteFile___childImageSharp___fluid___src',
  RemoteFileChildImageSharpFluidSrcSet = 'remoteFile___childImageSharp___fluid___srcSet',
  RemoteFileChildImageSharpFluidSrcWebp = 'remoteFile___childImageSharp___fluid___srcWebp',
  RemoteFileChildImageSharpFluidSrcSetWebp = 'remoteFile___childImageSharp___fluid___srcSetWebp',
  RemoteFileChildImageSharpFluidSizes = 'remoteFile___childImageSharp___fluid___sizes',
  RemoteFileChildImageSharpFluidOriginalImg = 'remoteFile___childImageSharp___fluid___originalImg',
  RemoteFileChildImageSharpFluidOriginalName = 'remoteFile___childImageSharp___fluid___originalName',
  RemoteFileChildImageSharpFluidPresentationWidth = 'remoteFile___childImageSharp___fluid___presentationWidth',
  RemoteFileChildImageSharpFluidPresentationHeight = 'remoteFile___childImageSharp___fluid___presentationHeight',
  RemoteFileChildImageSharpSizesBase64 = 'remoteFile___childImageSharp___sizes___base64',
  RemoteFileChildImageSharpSizesTracedSvg = 'remoteFile___childImageSharp___sizes___tracedSVG',
  RemoteFileChildImageSharpSizesAspectRatio = 'remoteFile___childImageSharp___sizes___aspectRatio',
  RemoteFileChildImageSharpSizesSrc = 'remoteFile___childImageSharp___sizes___src',
  RemoteFileChildImageSharpSizesSrcSet = 'remoteFile___childImageSharp___sizes___srcSet',
  RemoteFileChildImageSharpSizesSrcWebp = 'remoteFile___childImageSharp___sizes___srcWebp',
  RemoteFileChildImageSharpSizesSrcSetWebp = 'remoteFile___childImageSharp___sizes___srcSetWebp',
  RemoteFileChildImageSharpSizesSizes = 'remoteFile___childImageSharp___sizes___sizes',
  RemoteFileChildImageSharpSizesOriginalImg = 'remoteFile___childImageSharp___sizes___originalImg',
  RemoteFileChildImageSharpSizesOriginalName = 'remoteFile___childImageSharp___sizes___originalName',
  RemoteFileChildImageSharpSizesPresentationWidth = 'remoteFile___childImageSharp___sizes___presentationWidth',
  RemoteFileChildImageSharpSizesPresentationHeight = 'remoteFile___childImageSharp___sizes___presentationHeight',
  RemoteFileChildImageSharpGatsbyImageData = 'remoteFile___childImageSharp___gatsbyImageData',
  RemoteFileChildImageSharpOriginalWidth = 'remoteFile___childImageSharp___original___width',
  RemoteFileChildImageSharpOriginalHeight = 'remoteFile___childImageSharp___original___height',
  RemoteFileChildImageSharpOriginalSrc = 'remoteFile___childImageSharp___original___src',
  RemoteFileChildImageSharpResizeSrc = 'remoteFile___childImageSharp___resize___src',
  RemoteFileChildImageSharpResizeTracedSvg = 'remoteFile___childImageSharp___resize___tracedSVG',
  RemoteFileChildImageSharpResizeWidth = 'remoteFile___childImageSharp___resize___width',
  RemoteFileChildImageSharpResizeHeight = 'remoteFile___childImageSharp___resize___height',
  RemoteFileChildImageSharpResizeAspectRatio = 'remoteFile___childImageSharp___resize___aspectRatio',
  RemoteFileChildImageSharpResizeOriginalName = 'remoteFile___childImageSharp___resize___originalName',
  RemoteFileChildImageSharpId = 'remoteFile___childImageSharp___id',
  RemoteFileChildImageSharpParentId = 'remoteFile___childImageSharp___parent___id',
  RemoteFileChildImageSharpParentChildren = 'remoteFile___childImageSharp___parent___children',
  RemoteFileChildImageSharpChildren = 'remoteFile___childImageSharp___children',
  RemoteFileChildImageSharpChildrenId = 'remoteFile___childImageSharp___children___id',
  RemoteFileChildImageSharpChildrenChildren = 'remoteFile___childImageSharp___children___children',
  RemoteFileChildImageSharpInternalContent = 'remoteFile___childImageSharp___internal___content',
  RemoteFileChildImageSharpInternalContentDigest = 'remoteFile___childImageSharp___internal___contentDigest',
  RemoteFileChildImageSharpInternalDescription = 'remoteFile___childImageSharp___internal___description',
  RemoteFileChildImageSharpInternalFieldOwners = 'remoteFile___childImageSharp___internal___fieldOwners',
  RemoteFileChildImageSharpInternalIgnoreType = 'remoteFile___childImageSharp___internal___ignoreType',
  RemoteFileChildImageSharpInternalMediaType = 'remoteFile___childImageSharp___internal___mediaType',
  RemoteFileChildImageSharpInternalOwner = 'remoteFile___childImageSharp___internal___owner',
  RemoteFileChildImageSharpInternalType = 'remoteFile___childImageSharp___internal___type',
  RemoteFileId = 'remoteFile___id',
  RemoteFileParentId = 'remoteFile___parent___id',
  RemoteFileParentParentId = 'remoteFile___parent___parent___id',
  RemoteFileParentParentChildren = 'remoteFile___parent___parent___children',
  RemoteFileParentChildren = 'remoteFile___parent___children',
  RemoteFileParentChildrenId = 'remoteFile___parent___children___id',
  RemoteFileParentChildrenChildren = 'remoteFile___parent___children___children',
  RemoteFileParentInternalContent = 'remoteFile___parent___internal___content',
  RemoteFileParentInternalContentDigest = 'remoteFile___parent___internal___contentDigest',
  RemoteFileParentInternalDescription = 'remoteFile___parent___internal___description',
  RemoteFileParentInternalFieldOwners = 'remoteFile___parent___internal___fieldOwners',
  RemoteFileParentInternalIgnoreType = 'remoteFile___parent___internal___ignoreType',
  RemoteFileParentInternalMediaType = 'remoteFile___parent___internal___mediaType',
  RemoteFileParentInternalOwner = 'remoteFile___parent___internal___owner',
  RemoteFileParentInternalType = 'remoteFile___parent___internal___type',
  RemoteFileChildren = 'remoteFile___children',
  RemoteFileChildrenId = 'remoteFile___children___id',
  RemoteFileChildrenParentId = 'remoteFile___children___parent___id',
  RemoteFileChildrenParentChildren = 'remoteFile___children___parent___children',
  RemoteFileChildrenChildren = 'remoteFile___children___children',
  RemoteFileChildrenChildrenId = 'remoteFile___children___children___id',
  RemoteFileChildrenChildrenChildren = 'remoteFile___children___children___children',
  RemoteFileChildrenInternalContent = 'remoteFile___children___internal___content',
  RemoteFileChildrenInternalContentDigest = 'remoteFile___children___internal___contentDigest',
  RemoteFileChildrenInternalDescription = 'remoteFile___children___internal___description',
  RemoteFileChildrenInternalFieldOwners = 'remoteFile___children___internal___fieldOwners',
  RemoteFileChildrenInternalIgnoreType = 'remoteFile___children___internal___ignoreType',
  RemoteFileChildrenInternalMediaType = 'remoteFile___children___internal___mediaType',
  RemoteFileChildrenInternalOwner = 'remoteFile___children___internal___owner',
  RemoteFileChildrenInternalType = 'remoteFile___children___internal___type',
  RemoteFileInternalContent = 'remoteFile___internal___content',
  RemoteFileInternalContentDigest = 'remoteFile___internal___contentDigest',
  RemoteFileInternalDescription = 'remoteFile___internal___description',
  RemoteFileInternalFieldOwners = 'remoteFile___internal___fieldOwners',
  RemoteFileInternalIgnoreType = 'remoteFile___internal___ignoreType',
  RemoteFileInternalMediaType = 'remoteFile___internal___mediaType',
  RemoteFileInternalOwner = 'remoteFile___internal___owner',
  RemoteFileInternalType = 'remoteFile___internal___type',
  LocalFileSourceInstanceName = 'localFile___sourceInstanceName',
  LocalFileAbsolutePath = 'localFile___absolutePath',
  LocalFileRelativePath = 'localFile___relativePath',
  LocalFileExtension = 'localFile___extension',
  LocalFileSize = 'localFile___size',
  LocalFilePrettySize = 'localFile___prettySize',
  LocalFileModifiedTime = 'localFile___modifiedTime',
  LocalFileAccessTime = 'localFile___accessTime',
  LocalFileChangeTime = 'localFile___changeTime',
  LocalFileBirthTime = 'localFile___birthTime',
  LocalFileRoot = 'localFile___root',
  LocalFileDir = 'localFile___dir',
  LocalFileBase = 'localFile___base',
  LocalFileExt = 'localFile___ext',
  LocalFileName = 'localFile___name',
  LocalFileRelativeDirectory = 'localFile___relativeDirectory',
  LocalFileDev = 'localFile___dev',
  LocalFileMode = 'localFile___mode',
  LocalFileNlink = 'localFile___nlink',
  LocalFileUid = 'localFile___uid',
  LocalFileGid = 'localFile___gid',
  LocalFileRdev = 'localFile___rdev',
  LocalFileIno = 'localFile___ino',
  LocalFileAtimeMs = 'localFile___atimeMs',
  LocalFileMtimeMs = 'localFile___mtimeMs',
  LocalFileCtimeMs = 'localFile___ctimeMs',
  LocalFileAtime = 'localFile___atime',
  LocalFileMtime = 'localFile___mtime',
  LocalFileCtime = 'localFile___ctime',
  LocalFileBirthtime = 'localFile___birthtime',
  LocalFileBirthtimeMs = 'localFile___birthtimeMs',
  LocalFileBlksize = 'localFile___blksize',
  LocalFileBlocks = 'localFile___blocks',
  LocalFilePublicUrl = 'localFile___publicURL',
  LocalFileChildrenImageSharp = 'localFile___childrenImageSharp',
  LocalFileChildrenImageSharpFixedBase64 = 'localFile___childrenImageSharp___fixed___base64',
  LocalFileChildrenImageSharpFixedTracedSvg = 'localFile___childrenImageSharp___fixed___tracedSVG',
  LocalFileChildrenImageSharpFixedAspectRatio = 'localFile___childrenImageSharp___fixed___aspectRatio',
  LocalFileChildrenImageSharpFixedWidth = 'localFile___childrenImageSharp___fixed___width',
  LocalFileChildrenImageSharpFixedHeight = 'localFile___childrenImageSharp___fixed___height',
  LocalFileChildrenImageSharpFixedSrc = 'localFile___childrenImageSharp___fixed___src',
  LocalFileChildrenImageSharpFixedSrcSet = 'localFile___childrenImageSharp___fixed___srcSet',
  LocalFileChildrenImageSharpFixedSrcWebp = 'localFile___childrenImageSharp___fixed___srcWebp',
  LocalFileChildrenImageSharpFixedSrcSetWebp = 'localFile___childrenImageSharp___fixed___srcSetWebp',
  LocalFileChildrenImageSharpFixedOriginalName = 'localFile___childrenImageSharp___fixed___originalName',
  LocalFileChildrenImageSharpResolutionsBase64 = 'localFile___childrenImageSharp___resolutions___base64',
  LocalFileChildrenImageSharpResolutionsTracedSvg = 'localFile___childrenImageSharp___resolutions___tracedSVG',
  LocalFileChildrenImageSharpResolutionsAspectRatio = 'localFile___childrenImageSharp___resolutions___aspectRatio',
  LocalFileChildrenImageSharpResolutionsWidth = 'localFile___childrenImageSharp___resolutions___width',
  LocalFileChildrenImageSharpResolutionsHeight = 'localFile___childrenImageSharp___resolutions___height',
  LocalFileChildrenImageSharpResolutionsSrc = 'localFile___childrenImageSharp___resolutions___src',
  LocalFileChildrenImageSharpResolutionsSrcSet = 'localFile___childrenImageSharp___resolutions___srcSet',
  LocalFileChildrenImageSharpResolutionsSrcWebp = 'localFile___childrenImageSharp___resolutions___srcWebp',
  LocalFileChildrenImageSharpResolutionsSrcSetWebp = 'localFile___childrenImageSharp___resolutions___srcSetWebp',
  LocalFileChildrenImageSharpResolutionsOriginalName = 'localFile___childrenImageSharp___resolutions___originalName',
  LocalFileChildrenImageSharpFluidBase64 = 'localFile___childrenImageSharp___fluid___base64',
  LocalFileChildrenImageSharpFluidTracedSvg = 'localFile___childrenImageSharp___fluid___tracedSVG',
  LocalFileChildrenImageSharpFluidAspectRatio = 'localFile___childrenImageSharp___fluid___aspectRatio',
  LocalFileChildrenImageSharpFluidSrc = 'localFile___childrenImageSharp___fluid___src',
  LocalFileChildrenImageSharpFluidSrcSet = 'localFile___childrenImageSharp___fluid___srcSet',
  LocalFileChildrenImageSharpFluidSrcWebp = 'localFile___childrenImageSharp___fluid___srcWebp',
  LocalFileChildrenImageSharpFluidSrcSetWebp = 'localFile___childrenImageSharp___fluid___srcSetWebp',
  LocalFileChildrenImageSharpFluidSizes = 'localFile___childrenImageSharp___fluid___sizes',
  LocalFileChildrenImageSharpFluidOriginalImg = 'localFile___childrenImageSharp___fluid___originalImg',
  LocalFileChildrenImageSharpFluidOriginalName = 'localFile___childrenImageSharp___fluid___originalName',
  LocalFileChildrenImageSharpFluidPresentationWidth = 'localFile___childrenImageSharp___fluid___presentationWidth',
  LocalFileChildrenImageSharpFluidPresentationHeight = 'localFile___childrenImageSharp___fluid___presentationHeight',
  LocalFileChildrenImageSharpSizesBase64 = 'localFile___childrenImageSharp___sizes___base64',
  LocalFileChildrenImageSharpSizesTracedSvg = 'localFile___childrenImageSharp___sizes___tracedSVG',
  LocalFileChildrenImageSharpSizesAspectRatio = 'localFile___childrenImageSharp___sizes___aspectRatio',
  LocalFileChildrenImageSharpSizesSrc = 'localFile___childrenImageSharp___sizes___src',
  LocalFileChildrenImageSharpSizesSrcSet = 'localFile___childrenImageSharp___sizes___srcSet',
  LocalFileChildrenImageSharpSizesSrcWebp = 'localFile___childrenImageSharp___sizes___srcWebp',
  LocalFileChildrenImageSharpSizesSrcSetWebp = 'localFile___childrenImageSharp___sizes___srcSetWebp',
  LocalFileChildrenImageSharpSizesSizes = 'localFile___childrenImageSharp___sizes___sizes',
  LocalFileChildrenImageSharpSizesOriginalImg = 'localFile___childrenImageSharp___sizes___originalImg',
  LocalFileChildrenImageSharpSizesOriginalName = 'localFile___childrenImageSharp___sizes___originalName',
  LocalFileChildrenImageSharpSizesPresentationWidth = 'localFile___childrenImageSharp___sizes___presentationWidth',
  LocalFileChildrenImageSharpSizesPresentationHeight = 'localFile___childrenImageSharp___sizes___presentationHeight',
  LocalFileChildrenImageSharpGatsbyImageData = 'localFile___childrenImageSharp___gatsbyImageData',
  LocalFileChildrenImageSharpOriginalWidth = 'localFile___childrenImageSharp___original___width',
  LocalFileChildrenImageSharpOriginalHeight = 'localFile___childrenImageSharp___original___height',
  LocalFileChildrenImageSharpOriginalSrc = 'localFile___childrenImageSharp___original___src',
  LocalFileChildrenImageSharpResizeSrc = 'localFile___childrenImageSharp___resize___src',
  LocalFileChildrenImageSharpResizeTracedSvg = 'localFile___childrenImageSharp___resize___tracedSVG',
  LocalFileChildrenImageSharpResizeWidth = 'localFile___childrenImageSharp___resize___width',
  LocalFileChildrenImageSharpResizeHeight = 'localFile___childrenImageSharp___resize___height',
  LocalFileChildrenImageSharpResizeAspectRatio = 'localFile___childrenImageSharp___resize___aspectRatio',
  LocalFileChildrenImageSharpResizeOriginalName = 'localFile___childrenImageSharp___resize___originalName',
  LocalFileChildrenImageSharpId = 'localFile___childrenImageSharp___id',
  LocalFileChildrenImageSharpParentId = 'localFile___childrenImageSharp___parent___id',
  LocalFileChildrenImageSharpParentChildren = 'localFile___childrenImageSharp___parent___children',
  LocalFileChildrenImageSharpChildren = 'localFile___childrenImageSharp___children',
  LocalFileChildrenImageSharpChildrenId = 'localFile___childrenImageSharp___children___id',
  LocalFileChildrenImageSharpChildrenChildren = 'localFile___childrenImageSharp___children___children',
  LocalFileChildrenImageSharpInternalContent = 'localFile___childrenImageSharp___internal___content',
  LocalFileChildrenImageSharpInternalContentDigest = 'localFile___childrenImageSharp___internal___contentDigest',
  LocalFileChildrenImageSharpInternalDescription = 'localFile___childrenImageSharp___internal___description',
  LocalFileChildrenImageSharpInternalFieldOwners = 'localFile___childrenImageSharp___internal___fieldOwners',
  LocalFileChildrenImageSharpInternalIgnoreType = 'localFile___childrenImageSharp___internal___ignoreType',
  LocalFileChildrenImageSharpInternalMediaType = 'localFile___childrenImageSharp___internal___mediaType',
  LocalFileChildrenImageSharpInternalOwner = 'localFile___childrenImageSharp___internal___owner',
  LocalFileChildrenImageSharpInternalType = 'localFile___childrenImageSharp___internal___type',
  LocalFileChildImageSharpFixedBase64 = 'localFile___childImageSharp___fixed___base64',
  LocalFileChildImageSharpFixedTracedSvg = 'localFile___childImageSharp___fixed___tracedSVG',
  LocalFileChildImageSharpFixedAspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  LocalFileChildImageSharpFixedWidth = 'localFile___childImageSharp___fixed___width',
  LocalFileChildImageSharpFixedHeight = 'localFile___childImageSharp___fixed___height',
  LocalFileChildImageSharpFixedSrc = 'localFile___childImageSharp___fixed___src',
  LocalFileChildImageSharpFixedSrcSet = 'localFile___childImageSharp___fixed___srcSet',
  LocalFileChildImageSharpFixedSrcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  LocalFileChildImageSharpFixedSrcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  LocalFileChildImageSharpFixedOriginalName = 'localFile___childImageSharp___fixed___originalName',
  LocalFileChildImageSharpResolutionsBase64 = 'localFile___childImageSharp___resolutions___base64',
  LocalFileChildImageSharpResolutionsTracedSvg = 'localFile___childImageSharp___resolutions___tracedSVG',
  LocalFileChildImageSharpResolutionsAspectRatio = 'localFile___childImageSharp___resolutions___aspectRatio',
  LocalFileChildImageSharpResolutionsWidth = 'localFile___childImageSharp___resolutions___width',
  LocalFileChildImageSharpResolutionsHeight = 'localFile___childImageSharp___resolutions___height',
  LocalFileChildImageSharpResolutionsSrc = 'localFile___childImageSharp___resolutions___src',
  LocalFileChildImageSharpResolutionsSrcSet = 'localFile___childImageSharp___resolutions___srcSet',
  LocalFileChildImageSharpResolutionsSrcWebp = 'localFile___childImageSharp___resolutions___srcWebp',
  LocalFileChildImageSharpResolutionsSrcSetWebp = 'localFile___childImageSharp___resolutions___srcSetWebp',
  LocalFileChildImageSharpResolutionsOriginalName = 'localFile___childImageSharp___resolutions___originalName',
  LocalFileChildImageSharpFluidBase64 = 'localFile___childImageSharp___fluid___base64',
  LocalFileChildImageSharpFluidTracedSvg = 'localFile___childImageSharp___fluid___tracedSVG',
  LocalFileChildImageSharpFluidAspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  LocalFileChildImageSharpFluidSrc = 'localFile___childImageSharp___fluid___src',
  LocalFileChildImageSharpFluidSrcSet = 'localFile___childImageSharp___fluid___srcSet',
  LocalFileChildImageSharpFluidSrcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  LocalFileChildImageSharpFluidSrcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  LocalFileChildImageSharpFluidSizes = 'localFile___childImageSharp___fluid___sizes',
  LocalFileChildImageSharpFluidOriginalImg = 'localFile___childImageSharp___fluid___originalImg',
  LocalFileChildImageSharpFluidOriginalName = 'localFile___childImageSharp___fluid___originalName',
  LocalFileChildImageSharpFluidPresentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  LocalFileChildImageSharpFluidPresentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  LocalFileChildImageSharpSizesBase64 = 'localFile___childImageSharp___sizes___base64',
  LocalFileChildImageSharpSizesTracedSvg = 'localFile___childImageSharp___sizes___tracedSVG',
  LocalFileChildImageSharpSizesAspectRatio = 'localFile___childImageSharp___sizes___aspectRatio',
  LocalFileChildImageSharpSizesSrc = 'localFile___childImageSharp___sizes___src',
  LocalFileChildImageSharpSizesSrcSet = 'localFile___childImageSharp___sizes___srcSet',
  LocalFileChildImageSharpSizesSrcWebp = 'localFile___childImageSharp___sizes___srcWebp',
  LocalFileChildImageSharpSizesSrcSetWebp = 'localFile___childImageSharp___sizes___srcSetWebp',
  LocalFileChildImageSharpSizesSizes = 'localFile___childImageSharp___sizes___sizes',
  LocalFileChildImageSharpSizesOriginalImg = 'localFile___childImageSharp___sizes___originalImg',
  LocalFileChildImageSharpSizesOriginalName = 'localFile___childImageSharp___sizes___originalName',
  LocalFileChildImageSharpSizesPresentationWidth = 'localFile___childImageSharp___sizes___presentationWidth',
  LocalFileChildImageSharpSizesPresentationHeight = 'localFile___childImageSharp___sizes___presentationHeight',
  LocalFileChildImageSharpGatsbyImageData = 'localFile___childImageSharp___gatsbyImageData',
  LocalFileChildImageSharpOriginalWidth = 'localFile___childImageSharp___original___width',
  LocalFileChildImageSharpOriginalHeight = 'localFile___childImageSharp___original___height',
  LocalFileChildImageSharpOriginalSrc = 'localFile___childImageSharp___original___src',
  LocalFileChildImageSharpResizeSrc = 'localFile___childImageSharp___resize___src',
  LocalFileChildImageSharpResizeTracedSvg = 'localFile___childImageSharp___resize___tracedSVG',
  LocalFileChildImageSharpResizeWidth = 'localFile___childImageSharp___resize___width',
  LocalFileChildImageSharpResizeHeight = 'localFile___childImageSharp___resize___height',
  LocalFileChildImageSharpResizeAspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  LocalFileChildImageSharpResizeOriginalName = 'localFile___childImageSharp___resize___originalName',
  LocalFileChildImageSharpId = 'localFile___childImageSharp___id',
  LocalFileChildImageSharpParentId = 'localFile___childImageSharp___parent___id',
  LocalFileChildImageSharpParentChildren = 'localFile___childImageSharp___parent___children',
  LocalFileChildImageSharpChildren = 'localFile___childImageSharp___children',
  LocalFileChildImageSharpChildrenId = 'localFile___childImageSharp___children___id',
  LocalFileChildImageSharpChildrenChildren = 'localFile___childImageSharp___children___children',
  LocalFileChildImageSharpInternalContent = 'localFile___childImageSharp___internal___content',
  LocalFileChildImageSharpInternalContentDigest = 'localFile___childImageSharp___internal___contentDigest',
  LocalFileChildImageSharpInternalDescription = 'localFile___childImageSharp___internal___description',
  LocalFileChildImageSharpInternalFieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  LocalFileChildImageSharpInternalIgnoreType = 'localFile___childImageSharp___internal___ignoreType',
  LocalFileChildImageSharpInternalMediaType = 'localFile___childImageSharp___internal___mediaType',
  LocalFileChildImageSharpInternalOwner = 'localFile___childImageSharp___internal___owner',
  LocalFileChildImageSharpInternalType = 'localFile___childImageSharp___internal___type',
  LocalFileId = 'localFile___id',
  LocalFileParentId = 'localFile___parent___id',
  LocalFileParentParentId = 'localFile___parent___parent___id',
  LocalFileParentParentChildren = 'localFile___parent___parent___children',
  LocalFileParentChildren = 'localFile___parent___children',
  LocalFileParentChildrenId = 'localFile___parent___children___id',
  LocalFileParentChildrenChildren = 'localFile___parent___children___children',
  LocalFileParentInternalContent = 'localFile___parent___internal___content',
  LocalFileParentInternalContentDigest = 'localFile___parent___internal___contentDigest',
  LocalFileParentInternalDescription = 'localFile___parent___internal___description',
  LocalFileParentInternalFieldOwners = 'localFile___parent___internal___fieldOwners',
  LocalFileParentInternalIgnoreType = 'localFile___parent___internal___ignoreType',
  LocalFileParentInternalMediaType = 'localFile___parent___internal___mediaType',
  LocalFileParentInternalOwner = 'localFile___parent___internal___owner',
  LocalFileParentInternalType = 'localFile___parent___internal___type',
  LocalFileChildren = 'localFile___children',
  LocalFileChildrenId = 'localFile___children___id',
  LocalFileChildrenParentId = 'localFile___children___parent___id',
  LocalFileChildrenParentChildren = 'localFile___children___parent___children',
  LocalFileChildrenChildren = 'localFile___children___children',
  LocalFileChildrenChildrenId = 'localFile___children___children___id',
  LocalFileChildrenChildrenChildren = 'localFile___children___children___children',
  LocalFileChildrenInternalContent = 'localFile___children___internal___content',
  LocalFileChildrenInternalContentDigest = 'localFile___children___internal___contentDigest',
  LocalFileChildrenInternalDescription = 'localFile___children___internal___description',
  LocalFileChildrenInternalFieldOwners = 'localFile___children___internal___fieldOwners',
  LocalFileChildrenInternalIgnoreType = 'localFile___children___internal___ignoreType',
  LocalFileChildrenInternalMediaType = 'localFile___children___internal___mediaType',
  LocalFileChildrenInternalOwner = 'localFile___children___internal___owner',
  LocalFileChildrenInternalType = 'localFile___children___internal___type',
  LocalFileInternalContent = 'localFile___internal___content',
  LocalFileInternalContentDigest = 'localFile___internal___contentDigest',
  LocalFileInternalDescription = 'localFile___internal___description',
  LocalFileInternalFieldOwners = 'localFile___internal___fieldOwners',
  LocalFileInternalIgnoreType = 'localFile___internal___ignoreType',
  LocalFileInternalMediaType = 'localFile___internal___mediaType',
  LocalFileInternalOwner = 'localFile___internal___owner',
  LocalFileInternalType = 'localFile___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpMediaItemFilterInput = {
  altText?: Maybe<StringQueryOperatorInput>;
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  mediaDetails?: Maybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: Maybe<StringQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  remoteFile?: Maybe<FileFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMediaItemGroupConnection = {
  __typename?: 'WpMediaItemGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpMediaItemEdge>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

/** Meta connected to a MediaItem */
export type WpMediaItemMeta = {
  __typename?: 'WpMediaItemMeta';
  aperture?: Maybe<Scalars['Float']>;
  camera?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  createdTimestamp?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['String']>;
  focalLength?: Maybe<Scalars['Float']>;
  iso?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  orientation?: Maybe<Scalars['String']>;
  shutterSpeed?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type WpMediaItemMetaFilterInput = {
  aperture?: Maybe<FloatQueryOperatorInput>;
  camera?: Maybe<StringQueryOperatorInput>;
  caption?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  createdTimestamp?: Maybe<IntQueryOperatorInput>;
  credit?: Maybe<StringQueryOperatorInput>;
  focalLength?: Maybe<FloatQueryOperatorInput>;
  iso?: Maybe<IntQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  orientation?: Maybe<StringQueryOperatorInput>;
  shutterSpeed?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type WpMediaItemSortInput = {
  fields?: Maybe<Array<Maybe<WpMediaItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the mediaItem type and the Comment type */
export type WpMediaItemToCommentConnection = {
  __typename?: 'WpMediaItemToCommentConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpMediaItemToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

/** Details of an available size for a media item */
export type WpMediaSize = {
  __typename?: 'WpMediaSize';
  /** The file of the for the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The height of the for the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the resource */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the for the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the for the referenced size */
  width?: Maybe<Scalars['String']>;
};

export type WpMediaSizeFilterInput = {
  file?: Maybe<StringQueryOperatorInput>;
  fileSize?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  sourceUrl?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<StringQueryOperatorInput>;
};

export type WpMediaSizeFilterListInput = {
  elemMatch?: Maybe<WpMediaSizeFilterInput>;
};

/**
 * Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
export type WpMenu = Node & WpNode & WpDatabaseIdentifier & {
  __typename?: 'WpMenu';
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<WpMenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpMenuConnection = {
  __typename?: 'WpMenuConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpMenuEdge>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpMenuGroupConnection>;
};


export type WpMenuConnectionDistinctArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMenuFieldsEnum;
};

export type WpMenuEdge = {
  __typename?: 'WpMenuEdge';
  next?: Maybe<WpMenu>;
  node: WpMenu;
  previous?: Maybe<WpMenu>;
};

export enum WpMenuFieldsEnum {
  Count = 'count',
  DatabaseId = 'databaseId',
  Id = 'id',
  Locations = 'locations',
  MenuItemsNodes = 'menuItems___nodes',
  MenuItemsNodesChildItemsNodes = 'menuItems___nodes___childItems___nodes',
  MenuItemsNodesCssClasses = 'menuItems___nodes___cssClasses',
  MenuItemsNodesDatabaseId = 'menuItems___nodes___databaseId',
  MenuItemsNodesDescription = 'menuItems___nodes___description',
  MenuItemsNodesId = 'menuItems___nodes___id',
  MenuItemsNodesLabel = 'menuItems___nodes___label',
  MenuItemsNodesLinkRelationship = 'menuItems___nodes___linkRelationship',
  MenuItemsNodesLocations = 'menuItems___nodes___locations',
  MenuItemsNodesOrder = 'menuItems___nodes___order',
  MenuItemsNodesParentDatabaseId = 'menuItems___nodes___parentDatabaseId',
  MenuItemsNodesParentId = 'menuItems___nodes___parentId',
  MenuItemsNodesPath = 'menuItems___nodes___path',
  MenuItemsNodesTarget = 'menuItems___nodes___target',
  MenuItemsNodesTitle = 'menuItems___nodes___title',
  MenuItemsNodesUrl = 'menuItems___nodes___url',
  MenuItemsNodesNodeType = 'menuItems___nodes___nodeType',
  MenuItemsNodesParentId = 'menuItems___nodes___parent___id',
  MenuItemsNodesParentChildren = 'menuItems___nodes___parent___children',
  MenuItemsNodesChildren = 'menuItems___nodes___children',
  MenuItemsNodesChildrenId = 'menuItems___nodes___children___id',
  MenuItemsNodesChildrenChildren = 'menuItems___nodes___children___children',
  MenuItemsNodesInternalContent = 'menuItems___nodes___internal___content',
  MenuItemsNodesInternalContentDigest = 'menuItems___nodes___internal___contentDigest',
  MenuItemsNodesInternalDescription = 'menuItems___nodes___internal___description',
  MenuItemsNodesInternalFieldOwners = 'menuItems___nodes___internal___fieldOwners',
  MenuItemsNodesInternalIgnoreType = 'menuItems___nodes___internal___ignoreType',
  MenuItemsNodesInternalMediaType = 'menuItems___nodes___internal___mediaType',
  MenuItemsNodesInternalOwner = 'menuItems___nodes___internal___owner',
  MenuItemsNodesInternalType = 'menuItems___nodes___internal___type',
  Name = 'name',
  Slug = 'slug',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpMenuFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: Maybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMenuGroupConnection = {
  __typename?: 'WpMenuGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpMenuEdge>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type WpMenuItem = Node & WpNode & WpDatabaseIdentifier & {
  __typename?: 'WpMenuItem';
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<WpMenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdge>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu?: Maybe<WpMenuItemToMenuConnectionEdge>;
  /** Menu item order */
  order?: Maybe<Scalars['Int']>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId?: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path: Scalars['String'];
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpMenuItemConnection = {
  __typename?: 'WpMenuItemConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpMenuItemEdge>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpMenuItemGroupConnection>;
};


export type WpMenuItemConnectionDistinctArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpMenuItemFieldsEnum;
};

export type WpMenuItemEdge = {
  __typename?: 'WpMenuItemEdge';
  next?: Maybe<WpMenuItem>;
  node: WpMenuItem;
  previous?: Maybe<WpMenuItem>;
};

export enum WpMenuItemFieldsEnum {
  ChildItemsNodes = 'childItems___nodes',
  ChildItemsNodesChildItemsNodes = 'childItems___nodes___childItems___nodes',
  ChildItemsNodesCssClasses = 'childItems___nodes___cssClasses',
  ChildItemsNodesDatabaseId = 'childItems___nodes___databaseId',
  ChildItemsNodesDescription = 'childItems___nodes___description',
  ChildItemsNodesId = 'childItems___nodes___id',
  ChildItemsNodesLabel = 'childItems___nodes___label',
  ChildItemsNodesLinkRelationship = 'childItems___nodes___linkRelationship',
  ChildItemsNodesLocations = 'childItems___nodes___locations',
  ChildItemsNodesOrder = 'childItems___nodes___order',
  ChildItemsNodesParentDatabaseId = 'childItems___nodes___parentDatabaseId',
  ChildItemsNodesParentId = 'childItems___nodes___parentId',
  ChildItemsNodesPath = 'childItems___nodes___path',
  ChildItemsNodesTarget = 'childItems___nodes___target',
  ChildItemsNodesTitle = 'childItems___nodes___title',
  ChildItemsNodesUrl = 'childItems___nodes___url',
  ChildItemsNodesNodeType = 'childItems___nodes___nodeType',
  ChildItemsNodesParentId = 'childItems___nodes___parent___id',
  ChildItemsNodesParentChildren = 'childItems___nodes___parent___children',
  ChildItemsNodesChildren = 'childItems___nodes___children',
  ChildItemsNodesChildrenId = 'childItems___nodes___children___id',
  ChildItemsNodesChildrenChildren = 'childItems___nodes___children___children',
  ChildItemsNodesInternalContent = 'childItems___nodes___internal___content',
  ChildItemsNodesInternalContentDigest = 'childItems___nodes___internal___contentDigest',
  ChildItemsNodesInternalDescription = 'childItems___nodes___internal___description',
  ChildItemsNodesInternalFieldOwners = 'childItems___nodes___internal___fieldOwners',
  ChildItemsNodesInternalIgnoreType = 'childItems___nodes___internal___ignoreType',
  ChildItemsNodesInternalMediaType = 'childItems___nodes___internal___mediaType',
  ChildItemsNodesInternalOwner = 'childItems___nodes___internal___owner',
  ChildItemsNodesInternalType = 'childItems___nodes___internal___type',
  ConnectedNodeNodeDatabaseId = 'connectedNode___node___databaseId',
  ConnectedNodeNodeId = 'connectedNode___node___id',
  ConnectedNodeNodeUri = 'connectedNode___node___uri',
  CssClasses = 'cssClasses',
  DatabaseId = 'databaseId',
  Description = 'description',
  Id = 'id',
  Label = 'label',
  LinkRelationship = 'linkRelationship',
  Locations = 'locations',
  MenuNodeCount = 'menu___node___count',
  MenuNodeDatabaseId = 'menu___node___databaseId',
  MenuNodeId = 'menu___node___id',
  MenuNodeLocations = 'menu___node___locations',
  MenuNodeMenuItemsNodes = 'menu___node___menuItems___nodes',
  MenuNodeName = 'menu___node___name',
  MenuNodeSlug = 'menu___node___slug',
  MenuNodeNodeType = 'menu___node___nodeType',
  MenuNodeParentId = 'menu___node___parent___id',
  MenuNodeParentChildren = 'menu___node___parent___children',
  MenuNodeChildren = 'menu___node___children',
  MenuNodeChildrenId = 'menu___node___children___id',
  MenuNodeChildrenChildren = 'menu___node___children___children',
  MenuNodeInternalContent = 'menu___node___internal___content',
  MenuNodeInternalContentDigest = 'menu___node___internal___contentDigest',
  MenuNodeInternalDescription = 'menu___node___internal___description',
  MenuNodeInternalFieldOwners = 'menu___node___internal___fieldOwners',
  MenuNodeInternalIgnoreType = 'menu___node___internal___ignoreType',
  MenuNodeInternalMediaType = 'menu___node___internal___mediaType',
  MenuNodeInternalOwner = 'menu___node___internal___owner',
  MenuNodeInternalType = 'menu___node___internal___type',
  Order = 'order',
  ParentDatabaseId = 'parentDatabaseId',
  ParentId = 'parentId',
  Path = 'path',
  Target = 'target',
  Title = 'title',
  Url = 'url',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpMenuItemFilterInput = {
  childItems?: Maybe<WpMenuItemToMenuItemConnectionFilterInput>;
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: Maybe<StringQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  linkRelationship?: Maybe<StringQueryOperatorInput>;
  locations?: Maybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: Maybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  order?: Maybe<IntQueryOperatorInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpMenuItemFilterListInput = {
  elemMatch?: Maybe<WpMenuItemFilterInput>;
};

export type WpMenuItemGroupConnection = {
  __typename?: 'WpMenuItemGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpMenuItemEdge>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpMenuItemLinkable = {
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri: Scalars['String'];
};

export type WpMenuItemLinkableFilterInput = {
  databaseId?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type WpMenuItemSortInput = {
  fields?: Maybe<Array<Maybe<WpMenuItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the MenuItem type and the Menu type */
export type WpMenuItemToMenuConnectionEdge = {
  __typename?: 'WpMenuItemToMenuConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpMenu>;
};

export type WpMenuItemToMenuConnectionEdgeFilterInput = {
  node?: Maybe<WpMenuFilterInput>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type WpMenuItemToMenuItemConnection = {
  __typename?: 'WpMenuItemToMenuItemConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

export type WpMenuItemToMenuItemConnectionFilterInput = {
  nodes?: Maybe<WpMenuItemFilterListInput>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type WpMenuItemToMenuItemLinkableConnectionEdge = {
  __typename?: 'WpMenuItemToMenuItemLinkableConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpMenuItemLinkable>;
};

export type WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput = {
  node?: Maybe<WpMenuItemLinkableFilterInput>;
};

/** Registered menu locations */
export enum WpMenuLocationEnum {
  Empty = 'EMPTY'
}

export type WpMenuLocationEnumQueryOperatorInput = {
  eq?: Maybe<WpMenuLocationEnum>;
  ne?: Maybe<WpMenuLocationEnum>;
  in?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  nin?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
};

export type WpMenuSortInput = {
  fields?: Maybe<Array<Maybe<WpMenuFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the Menu type and the MenuItem type */
export type WpMenuToMenuItemConnection = {
  __typename?: 'WpMenuToMenuItemConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

export type WpMenuToMenuItemConnectionFilterInput = {
  nodes?: Maybe<WpMenuItemFilterListInput>;
};

export type WpNode = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

export type WpNodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type WpNodeWithAuthorToUserConnectionEdge = {
  __typename?: 'WpNodeWithAuthorToUserConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpUser>;
};

export type WpNodeWithAuthorToUserConnectionEdgeFilterInput = {
  node?: Maybe<WpUserFilterInput>;
};

export type WpNodeWithComments = {
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
};

export type WpNodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
};

export type WpNodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
};

export type WpNodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type WpNodeWithFeaturedImageToMediaItemConnectionEdge = {
  __typename?: 'WpNodeWithFeaturedImageToMediaItemConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpMediaItem>;
};

export type WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput = {
  node?: Maybe<WpMediaItemFilterInput>;
};

export type WpNodeWithPageAttributes = {
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
};

export type WpNodeWithRevisions = {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type WpNodeWithRevisionsToContentNodeConnectionEdge = {
  __typename?: 'WpNodeWithRevisionsToContentNodeConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

export type WpNodeWithTemplate = {
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
};

export type WpNodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};

export type WpNodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The page type */
export type WpPage = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithComments & WpNodeWithRevisions & WpNodeWithPageAttributes & WpHierarchicalContentNode & WpMenuItemLinkable & {
  __typename?: 'WpPage';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the page type and the Comment type */
  comments?: Maybe<WpPageToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The page type */
export type WpPageDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The page type */
export type WpPageDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The page type */
export type WpPageModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The page type */
export type WpPageModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpPageConnection = {
  __typename?: 'WpPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpPageEdge>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpPageGroupConnection>;
};


export type WpPageConnectionDistinctArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPageFieldsEnum;
};

export type WpPageEdge = {
  __typename?: 'WpPageEdge';
  next?: Maybe<WpPage>;
  node: WpPage;
  previous?: Maybe<WpPage>;
};

export enum WpPageFieldsEnum {
  AncestorsNodes = 'ancestors___nodes',
  AncestorsNodesDatabaseId = 'ancestors___nodes___databaseId',
  AncestorsNodesDate = 'ancestors___nodes___date',
  AncestorsNodesDateGmt = 'ancestors___nodes___dateGmt',
  AncestorsNodesDesiredSlug = 'ancestors___nodes___desiredSlug',
  AncestorsNodesEnclosure = 'ancestors___nodes___enclosure',
  AncestorsNodesGuid = 'ancestors___nodes___guid',
  AncestorsNodesId = 'ancestors___nodes___id',
  AncestorsNodesLink = 'ancestors___nodes___link',
  AncestorsNodesModified = 'ancestors___nodes___modified',
  AncestorsNodesModifiedGmt = 'ancestors___nodes___modifiedGmt',
  AncestorsNodesSlug = 'ancestors___nodes___slug',
  AncestorsNodesStatus = 'ancestors___nodes___status',
  AncestorsNodesTemplateTemplateName = 'ancestors___nodes___template___templateName',
  AncestorsNodesUri = 'ancestors___nodes___uri',
  AncestorsNodesNodeType = 'ancestors___nodes___nodeType',
  AuthorNodeAvatarDefault = 'author___node___avatar___default',
  AuthorNodeAvatarExtraAttr = 'author___node___avatar___extraAttr',
  AuthorNodeAvatarForceDefault = 'author___node___avatar___forceDefault',
  AuthorNodeAvatarFoundAvatar = 'author___node___avatar___foundAvatar',
  AuthorNodeAvatarHeight = 'author___node___avatar___height',
  AuthorNodeAvatarRating = 'author___node___avatar___rating',
  AuthorNodeAvatarScheme = 'author___node___avatar___scheme',
  AuthorNodeAvatarSize = 'author___node___avatar___size',
  AuthorNodeAvatarUrl = 'author___node___avatar___url',
  AuthorNodeAvatarWidth = 'author___node___avatar___width',
  AuthorNodeCapKey = 'author___node___capKey',
  AuthorNodeCapabilities = 'author___node___capabilities',
  AuthorNodeCommentsNodes = 'author___node___comments___nodes',
  AuthorNodeDatabaseId = 'author___node___databaseId',
  AuthorNodeDescription = 'author___node___description',
  AuthorNodeEmail = 'author___node___email',
  AuthorNodeExtraCapabilities = 'author___node___extraCapabilities',
  AuthorNodeFirstName = 'author___node___firstName',
  AuthorNodeId = 'author___node___id',
  AuthorNodeLastName = 'author___node___lastName',
  AuthorNodeLocale = 'author___node___locale',
  AuthorNodeName = 'author___node___name',
  AuthorNodeNicename = 'author___node___nicename',
  AuthorNodeNickname = 'author___node___nickname',
  AuthorNodePagesNodes = 'author___node___pages___nodes',
  AuthorNodePostsNodes = 'author___node___posts___nodes',
  AuthorNodeRegisteredDate = 'author___node___registeredDate',
  AuthorNodeRolesNodes = 'author___node___roles___nodes',
  AuthorNodeSlug = 'author___node___slug',
  AuthorNodeUri = 'author___node___uri',
  AuthorNodeUrl = 'author___node___url',
  AuthorNodeUsername = 'author___node___username',
  AuthorNodeNodeType = 'author___node___nodeType',
  AuthorNodeParentId = 'author___node___parent___id',
  AuthorNodeParentChildren = 'author___node___parent___children',
  AuthorNodeChildren = 'author___node___children',
  AuthorNodeChildrenId = 'author___node___children___id',
  AuthorNodeChildrenChildren = 'author___node___children___children',
  AuthorNodeInternalContent = 'author___node___internal___content',
  AuthorNodeInternalContentDigest = 'author___node___internal___contentDigest',
  AuthorNodeInternalDescription = 'author___node___internal___description',
  AuthorNodeInternalFieldOwners = 'author___node___internal___fieldOwners',
  AuthorNodeInternalIgnoreType = 'author___node___internal___ignoreType',
  AuthorNodeInternalMediaType = 'author___node___internal___mediaType',
  AuthorNodeInternalOwner = 'author___node___internal___owner',
  AuthorNodeInternalType = 'author___node___internal___type',
  AuthorDatabaseId = 'authorDatabaseId',
  AuthorId = 'authorId',
  WpChildrenNodes = 'wpChildren___nodes',
  WpChildrenNodesDatabaseId = 'wpChildren___nodes___databaseId',
  WpChildrenNodesDate = 'wpChildren___nodes___date',
  WpChildrenNodesDateGmt = 'wpChildren___nodes___dateGmt',
  WpChildrenNodesDesiredSlug = 'wpChildren___nodes___desiredSlug',
  WpChildrenNodesEnclosure = 'wpChildren___nodes___enclosure',
  WpChildrenNodesGuid = 'wpChildren___nodes___guid',
  WpChildrenNodesId = 'wpChildren___nodes___id',
  WpChildrenNodesLink = 'wpChildren___nodes___link',
  WpChildrenNodesModified = 'wpChildren___nodes___modified',
  WpChildrenNodesModifiedGmt = 'wpChildren___nodes___modifiedGmt',
  WpChildrenNodesSlug = 'wpChildren___nodes___slug',
  WpChildrenNodesStatus = 'wpChildren___nodes___status',
  WpChildrenNodesTemplateTemplateName = 'wpChildren___nodes___template___templateName',
  WpChildrenNodesUri = 'wpChildren___nodes___uri',
  WpChildrenNodesNodeType = 'wpChildren___nodes___nodeType',
  CommentCount = 'commentCount',
  CommentStatus = 'commentStatus',
  CommentsNodes = 'comments___nodes',
  CommentsNodesAgent = 'comments___nodes___agent',
  CommentsNodesApproved = 'comments___nodes___approved',
  CommentsNodesAuthorIp = 'comments___nodes___authorIp',
  CommentsNodesContent = 'comments___nodes___content',
  CommentsNodesDatabaseId = 'comments___nodes___databaseId',
  CommentsNodesDate = 'comments___nodes___date',
  CommentsNodesDateGmt = 'comments___nodes___dateGmt',
  CommentsNodesId = 'comments___nodes___id',
  CommentsNodesKarma = 'comments___nodes___karma',
  CommentsNodesParentDatabaseId = 'comments___nodes___parentDatabaseId',
  CommentsNodesParentId = 'comments___nodes___parentId',
  CommentsNodesRepliesNodes = 'comments___nodes___replies___nodes',
  CommentsNodesType = 'comments___nodes___type',
  CommentsNodesNodeType = 'comments___nodes___nodeType',
  CommentsNodesParentId = 'comments___nodes___parent___id',
  CommentsNodesParentChildren = 'comments___nodes___parent___children',
  CommentsNodesChildren = 'comments___nodes___children',
  CommentsNodesChildrenId = 'comments___nodes___children___id',
  CommentsNodesChildrenChildren = 'comments___nodes___children___children',
  CommentsNodesInternalContent = 'comments___nodes___internal___content',
  CommentsNodesInternalContentDigest = 'comments___nodes___internal___contentDigest',
  CommentsNodesInternalDescription = 'comments___nodes___internal___description',
  CommentsNodesInternalFieldOwners = 'comments___nodes___internal___fieldOwners',
  CommentsNodesInternalIgnoreType = 'comments___nodes___internal___ignoreType',
  CommentsNodesInternalMediaType = 'comments___nodes___internal___mediaType',
  CommentsNodesInternalOwner = 'comments___nodes___internal___owner',
  CommentsNodesInternalType = 'comments___nodes___internal___type',
  Content = 'content',
  ContentTypeNodeArchivePath = 'contentType___node___archivePath',
  ContentTypeNodeCanExport = 'contentType___node___canExport',
  ContentTypeNodeConnectedTaxonomiesNodes = 'contentType___node___connectedTaxonomies___nodes',
  ContentTypeNodeContentNodesNodes = 'contentType___node___contentNodes___nodes',
  ContentTypeNodeDeleteWithUser = 'contentType___node___deleteWithUser',
  ContentTypeNodeDescription = 'contentType___node___description',
  ContentTypeNodeExcludeFromSearch = 'contentType___node___excludeFromSearch',
  ContentTypeNodeGraphqlPluralName = 'contentType___node___graphqlPluralName',
  ContentTypeNodeGraphqlSingleName = 'contentType___node___graphqlSingleName',
  ContentTypeNodeHasArchive = 'contentType___node___hasArchive',
  ContentTypeNodeHierarchical = 'contentType___node___hierarchical',
  ContentTypeNodeId = 'contentType___node___id',
  ContentTypeNodeIsFrontPage = 'contentType___node___isFrontPage',
  ContentTypeNodeIsPostsPage = 'contentType___node___isPostsPage',
  ContentTypeNodeLabel = 'contentType___node___label',
  ContentTypeNodeLabelsAddNew = 'contentType___node___labels___addNew',
  ContentTypeNodeLabelsAddNewItem = 'contentType___node___labels___addNewItem',
  ContentTypeNodeLabelsAllItems = 'contentType___node___labels___allItems',
  ContentTypeNodeLabelsArchives = 'contentType___node___labels___archives',
  ContentTypeNodeLabelsAttributes = 'contentType___node___labels___attributes',
  ContentTypeNodeLabelsEditItem = 'contentType___node___labels___editItem',
  ContentTypeNodeLabelsFeaturedImage = 'contentType___node___labels___featuredImage',
  ContentTypeNodeLabelsFilterItemsList = 'contentType___node___labels___filterItemsList',
  ContentTypeNodeLabelsInsertIntoItem = 'contentType___node___labels___insertIntoItem',
  ContentTypeNodeLabelsItemsList = 'contentType___node___labels___itemsList',
  ContentTypeNodeLabelsItemsListNavigation = 'contentType___node___labels___itemsListNavigation',
  ContentTypeNodeLabelsMenuName = 'contentType___node___labels___menuName',
  ContentTypeNodeLabelsName = 'contentType___node___labels___name',
  ContentTypeNodeLabelsNewItem = 'contentType___node___labels___newItem',
  ContentTypeNodeLabelsNotFound = 'contentType___node___labels___notFound',
  ContentTypeNodeLabelsNotFoundInTrash = 'contentType___node___labels___notFoundInTrash',
  ContentTypeNodeLabelsParentItemColon = 'contentType___node___labels___parentItemColon',
  ContentTypeNodeLabelsRemoveFeaturedImage = 'contentType___node___labels___removeFeaturedImage',
  ContentTypeNodeLabelsSearchItems = 'contentType___node___labels___searchItems',
  ContentTypeNodeLabelsSetFeaturedImage = 'contentType___node___labels___setFeaturedImage',
  ContentTypeNodeLabelsSingularName = 'contentType___node___labels___singularName',
  ContentTypeNodeLabelsUploadedToThisItem = 'contentType___node___labels___uploadedToThisItem',
  ContentTypeNodeLabelsUseFeaturedImage = 'contentType___node___labels___useFeaturedImage',
  ContentTypeNodeLabelsViewItem = 'contentType___node___labels___viewItem',
  ContentTypeNodeLabelsViewItems = 'contentType___node___labels___viewItems',
  ContentTypeNodeMenuIcon = 'contentType___node___menuIcon',
  ContentTypeNodeMenuPosition = 'contentType___node___menuPosition',
  ContentTypeNodeName = 'contentType___node___name',
  ContentTypeNodePublic = 'contentType___node___public',
  ContentTypeNodePubliclyQueryable = 'contentType___node___publiclyQueryable',
  ContentTypeNodeRestBase = 'contentType___node___restBase',
  ContentTypeNodeRestControllerClass = 'contentType___node___restControllerClass',
  ContentTypeNodeShowInAdminBar = 'contentType___node___showInAdminBar',
  ContentTypeNodeShowInGraphql = 'contentType___node___showInGraphql',
  ContentTypeNodeShowInMenu = 'contentType___node___showInMenu',
  ContentTypeNodeShowInNavMenus = 'contentType___node___showInNavMenus',
  ContentTypeNodeShowInRest = 'contentType___node___showInRest',
  ContentTypeNodeShowUi = 'contentType___node___showUi',
  ContentTypeNodeUri = 'contentType___node___uri',
  ContentTypeNodeNodeType = 'contentType___node___nodeType',
  ContentTypeNodeParentId = 'contentType___node___parent___id',
  ContentTypeNodeParentChildren = 'contentType___node___parent___children',
  ContentTypeNodeChildren = 'contentType___node___children',
  ContentTypeNodeChildrenId = 'contentType___node___children___id',
  ContentTypeNodeChildrenChildren = 'contentType___node___children___children',
  ContentTypeNodeInternalContent = 'contentType___node___internal___content',
  ContentTypeNodeInternalContentDigest = 'contentType___node___internal___contentDigest',
  ContentTypeNodeInternalDescription = 'contentType___node___internal___description',
  ContentTypeNodeInternalFieldOwners = 'contentType___node___internal___fieldOwners',
  ContentTypeNodeInternalIgnoreType = 'contentType___node___internal___ignoreType',
  ContentTypeNodeInternalMediaType = 'contentType___node___internal___mediaType',
  ContentTypeNodeInternalOwner = 'contentType___node___internal___owner',
  ContentTypeNodeInternalType = 'contentType___node___internal___type',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  DesiredSlug = 'desiredSlug',
  Enclosure = 'enclosure',
  FeaturedImageNodeAltText = 'featuredImage___node___altText',
  FeaturedImageNodeAncestorsNodes = 'featuredImage___node___ancestors___nodes',
  FeaturedImageNodeAuthorDatabaseId = 'featuredImage___node___authorDatabaseId',
  FeaturedImageNodeAuthorId = 'featuredImage___node___authorId',
  FeaturedImageNodeCaption = 'featuredImage___node___caption',
  FeaturedImageNodeWpChildrenNodes = 'featuredImage___node___wpChildren___nodes',
  FeaturedImageNodeCommentCount = 'featuredImage___node___commentCount',
  FeaturedImageNodeCommentStatus = 'featuredImage___node___commentStatus',
  FeaturedImageNodeCommentsNodes = 'featuredImage___node___comments___nodes',
  FeaturedImageNodeDatabaseId = 'featuredImage___node___databaseId',
  FeaturedImageNodeDate = 'featuredImage___node___date',
  FeaturedImageNodeDateGmt = 'featuredImage___node___dateGmt',
  FeaturedImageNodeDescription = 'featuredImage___node___description',
  FeaturedImageNodeDesiredSlug = 'featuredImage___node___desiredSlug',
  FeaturedImageNodeEnclosure = 'featuredImage___node___enclosure',
  FeaturedImageNodeFileSize = 'featuredImage___node___fileSize',
  FeaturedImageNodeGuid = 'featuredImage___node___guid',
  FeaturedImageNodeId = 'featuredImage___node___id',
  FeaturedImageNodeLink = 'featuredImage___node___link',
  FeaturedImageNodeMediaDetailsFile = 'featuredImage___node___mediaDetails___file',
  FeaturedImageNodeMediaDetailsHeight = 'featuredImage___node___mediaDetails___height',
  FeaturedImageNodeMediaDetailsSizes = 'featuredImage___node___mediaDetails___sizes',
  FeaturedImageNodeMediaDetailsWidth = 'featuredImage___node___mediaDetails___width',
  FeaturedImageNodeMediaItemUrl = 'featuredImage___node___mediaItemUrl',
  FeaturedImageNodeMediaType = 'featuredImage___node___mediaType',
  FeaturedImageNodeMimeType = 'featuredImage___node___mimeType',
  FeaturedImageNodeModified = 'featuredImage___node___modified',
  FeaturedImageNodeModifiedGmt = 'featuredImage___node___modifiedGmt',
  FeaturedImageNodeParentDatabaseId = 'featuredImage___node___parentDatabaseId',
  FeaturedImageNodeParentId = 'featuredImage___node___parentId',
  FeaturedImageNodeSizes = 'featuredImage___node___sizes',
  FeaturedImageNodeSlug = 'featuredImage___node___slug',
  FeaturedImageNodeSourceUrl = 'featuredImage___node___sourceUrl',
  FeaturedImageNodeSrcSet = 'featuredImage___node___srcSet',
  FeaturedImageNodeStatus = 'featuredImage___node___status',
  FeaturedImageNodeTemplateTemplateName = 'featuredImage___node___template___templateName',
  FeaturedImageNodeTitle = 'featuredImage___node___title',
  FeaturedImageNodeUri = 'featuredImage___node___uri',
  FeaturedImageNodeNodeType = 'featuredImage___node___nodeType',
  FeaturedImageNodeRemoteFileSourceInstanceName = 'featuredImage___node___remoteFile___sourceInstanceName',
  FeaturedImageNodeRemoteFileAbsolutePath = 'featuredImage___node___remoteFile___absolutePath',
  FeaturedImageNodeRemoteFileRelativePath = 'featuredImage___node___remoteFile___relativePath',
  FeaturedImageNodeRemoteFileExtension = 'featuredImage___node___remoteFile___extension',
  FeaturedImageNodeRemoteFileSize = 'featuredImage___node___remoteFile___size',
  FeaturedImageNodeRemoteFilePrettySize = 'featuredImage___node___remoteFile___prettySize',
  FeaturedImageNodeRemoteFileModifiedTime = 'featuredImage___node___remoteFile___modifiedTime',
  FeaturedImageNodeRemoteFileAccessTime = 'featuredImage___node___remoteFile___accessTime',
  FeaturedImageNodeRemoteFileChangeTime = 'featuredImage___node___remoteFile___changeTime',
  FeaturedImageNodeRemoteFileBirthTime = 'featuredImage___node___remoteFile___birthTime',
  FeaturedImageNodeRemoteFileRoot = 'featuredImage___node___remoteFile___root',
  FeaturedImageNodeRemoteFileDir = 'featuredImage___node___remoteFile___dir',
  FeaturedImageNodeRemoteFileBase = 'featuredImage___node___remoteFile___base',
  FeaturedImageNodeRemoteFileExt = 'featuredImage___node___remoteFile___ext',
  FeaturedImageNodeRemoteFileName = 'featuredImage___node___remoteFile___name',
  FeaturedImageNodeRemoteFileRelativeDirectory = 'featuredImage___node___remoteFile___relativeDirectory',
  FeaturedImageNodeRemoteFileDev = 'featuredImage___node___remoteFile___dev',
  FeaturedImageNodeRemoteFileMode = 'featuredImage___node___remoteFile___mode',
  FeaturedImageNodeRemoteFileNlink = 'featuredImage___node___remoteFile___nlink',
  FeaturedImageNodeRemoteFileUid = 'featuredImage___node___remoteFile___uid',
  FeaturedImageNodeRemoteFileGid = 'featuredImage___node___remoteFile___gid',
  FeaturedImageNodeRemoteFileRdev = 'featuredImage___node___remoteFile___rdev',
  FeaturedImageNodeRemoteFileIno = 'featuredImage___node___remoteFile___ino',
  FeaturedImageNodeRemoteFileAtimeMs = 'featuredImage___node___remoteFile___atimeMs',
  FeaturedImageNodeRemoteFileMtimeMs = 'featuredImage___node___remoteFile___mtimeMs',
  FeaturedImageNodeRemoteFileCtimeMs = 'featuredImage___node___remoteFile___ctimeMs',
  FeaturedImageNodeRemoteFileAtime = 'featuredImage___node___remoteFile___atime',
  FeaturedImageNodeRemoteFileMtime = 'featuredImage___node___remoteFile___mtime',
  FeaturedImageNodeRemoteFileCtime = 'featuredImage___node___remoteFile___ctime',
  FeaturedImageNodeRemoteFileBirthtime = 'featuredImage___node___remoteFile___birthtime',
  FeaturedImageNodeRemoteFileBirthtimeMs = 'featuredImage___node___remoteFile___birthtimeMs',
  FeaturedImageNodeRemoteFileBlksize = 'featuredImage___node___remoteFile___blksize',
  FeaturedImageNodeRemoteFileBlocks = 'featuredImage___node___remoteFile___blocks',
  FeaturedImageNodeRemoteFilePublicUrl = 'featuredImage___node___remoteFile___publicURL',
  FeaturedImageNodeRemoteFileChildrenImageSharp = 'featuredImage___node___remoteFile___childrenImageSharp',
  FeaturedImageNodeRemoteFileId = 'featuredImage___node___remoteFile___id',
  FeaturedImageNodeRemoteFileChildren = 'featuredImage___node___remoteFile___children',
  FeaturedImageNodeLocalFileSourceInstanceName = 'featuredImage___node___localFile___sourceInstanceName',
  FeaturedImageNodeLocalFileAbsolutePath = 'featuredImage___node___localFile___absolutePath',
  FeaturedImageNodeLocalFileRelativePath = 'featuredImage___node___localFile___relativePath',
  FeaturedImageNodeLocalFileExtension = 'featuredImage___node___localFile___extension',
  FeaturedImageNodeLocalFileSize = 'featuredImage___node___localFile___size',
  FeaturedImageNodeLocalFilePrettySize = 'featuredImage___node___localFile___prettySize',
  FeaturedImageNodeLocalFileModifiedTime = 'featuredImage___node___localFile___modifiedTime',
  FeaturedImageNodeLocalFileAccessTime = 'featuredImage___node___localFile___accessTime',
  FeaturedImageNodeLocalFileChangeTime = 'featuredImage___node___localFile___changeTime',
  FeaturedImageNodeLocalFileBirthTime = 'featuredImage___node___localFile___birthTime',
  FeaturedImageNodeLocalFileRoot = 'featuredImage___node___localFile___root',
  FeaturedImageNodeLocalFileDir = 'featuredImage___node___localFile___dir',
  FeaturedImageNodeLocalFileBase = 'featuredImage___node___localFile___base',
  FeaturedImageNodeLocalFileExt = 'featuredImage___node___localFile___ext',
  FeaturedImageNodeLocalFileName = 'featuredImage___node___localFile___name',
  FeaturedImageNodeLocalFileRelativeDirectory = 'featuredImage___node___localFile___relativeDirectory',
  FeaturedImageNodeLocalFileDev = 'featuredImage___node___localFile___dev',
  FeaturedImageNodeLocalFileMode = 'featuredImage___node___localFile___mode',
  FeaturedImageNodeLocalFileNlink = 'featuredImage___node___localFile___nlink',
  FeaturedImageNodeLocalFileUid = 'featuredImage___node___localFile___uid',
  FeaturedImageNodeLocalFileGid = 'featuredImage___node___localFile___gid',
  FeaturedImageNodeLocalFileRdev = 'featuredImage___node___localFile___rdev',
  FeaturedImageNodeLocalFileIno = 'featuredImage___node___localFile___ino',
  FeaturedImageNodeLocalFileAtimeMs = 'featuredImage___node___localFile___atimeMs',
  FeaturedImageNodeLocalFileMtimeMs = 'featuredImage___node___localFile___mtimeMs',
  FeaturedImageNodeLocalFileCtimeMs = 'featuredImage___node___localFile___ctimeMs',
  FeaturedImageNodeLocalFileAtime = 'featuredImage___node___localFile___atime',
  FeaturedImageNodeLocalFileMtime = 'featuredImage___node___localFile___mtime',
  FeaturedImageNodeLocalFileCtime = 'featuredImage___node___localFile___ctime',
  FeaturedImageNodeLocalFileBirthtime = 'featuredImage___node___localFile___birthtime',
  FeaturedImageNodeLocalFileBirthtimeMs = 'featuredImage___node___localFile___birthtimeMs',
  FeaturedImageNodeLocalFileBlksize = 'featuredImage___node___localFile___blksize',
  FeaturedImageNodeLocalFileBlocks = 'featuredImage___node___localFile___blocks',
  FeaturedImageNodeLocalFilePublicUrl = 'featuredImage___node___localFile___publicURL',
  FeaturedImageNodeLocalFileChildrenImageSharp = 'featuredImage___node___localFile___childrenImageSharp',
  FeaturedImageNodeLocalFileId = 'featuredImage___node___localFile___id',
  FeaturedImageNodeLocalFileChildren = 'featuredImage___node___localFile___children',
  FeaturedImageNodeParentId = 'featuredImage___node___parent___id',
  FeaturedImageNodeParentChildren = 'featuredImage___node___parent___children',
  FeaturedImageNodeChildren = 'featuredImage___node___children',
  FeaturedImageNodeChildrenId = 'featuredImage___node___children___id',
  FeaturedImageNodeChildrenChildren = 'featuredImage___node___children___children',
  FeaturedImageNodeInternalContent = 'featuredImage___node___internal___content',
  FeaturedImageNodeInternalContentDigest = 'featuredImage___node___internal___contentDigest',
  FeaturedImageNodeInternalDescription = 'featuredImage___node___internal___description',
  FeaturedImageNodeInternalFieldOwners = 'featuredImage___node___internal___fieldOwners',
  FeaturedImageNodeInternalIgnoreType = 'featuredImage___node___internal___ignoreType',
  FeaturedImageNodeInternalMediaType = 'featuredImage___node___internal___mediaType',
  FeaturedImageNodeInternalOwner = 'featuredImage___node___internal___owner',
  FeaturedImageNodeInternalType = 'featuredImage___node___internal___type',
  FeaturedImageDatabaseId = 'featuredImageDatabaseId',
  FeaturedImageId = 'featuredImageId',
  Guid = 'guid',
  Id = 'id',
  IsFrontPage = 'isFrontPage',
  IsPostsPage = 'isPostsPage',
  IsRevision = 'isRevision',
  LastEditedByNodeAvatarDefault = 'lastEditedBy___node___avatar___default',
  LastEditedByNodeAvatarExtraAttr = 'lastEditedBy___node___avatar___extraAttr',
  LastEditedByNodeAvatarForceDefault = 'lastEditedBy___node___avatar___forceDefault',
  LastEditedByNodeAvatarFoundAvatar = 'lastEditedBy___node___avatar___foundAvatar',
  LastEditedByNodeAvatarHeight = 'lastEditedBy___node___avatar___height',
  LastEditedByNodeAvatarRating = 'lastEditedBy___node___avatar___rating',
  LastEditedByNodeAvatarScheme = 'lastEditedBy___node___avatar___scheme',
  LastEditedByNodeAvatarSize = 'lastEditedBy___node___avatar___size',
  LastEditedByNodeAvatarUrl = 'lastEditedBy___node___avatar___url',
  LastEditedByNodeAvatarWidth = 'lastEditedBy___node___avatar___width',
  LastEditedByNodeCapKey = 'lastEditedBy___node___capKey',
  LastEditedByNodeCapabilities = 'lastEditedBy___node___capabilities',
  LastEditedByNodeCommentsNodes = 'lastEditedBy___node___comments___nodes',
  LastEditedByNodeDatabaseId = 'lastEditedBy___node___databaseId',
  LastEditedByNodeDescription = 'lastEditedBy___node___description',
  LastEditedByNodeEmail = 'lastEditedBy___node___email',
  LastEditedByNodeExtraCapabilities = 'lastEditedBy___node___extraCapabilities',
  LastEditedByNodeFirstName = 'lastEditedBy___node___firstName',
  LastEditedByNodeId = 'lastEditedBy___node___id',
  LastEditedByNodeLastName = 'lastEditedBy___node___lastName',
  LastEditedByNodeLocale = 'lastEditedBy___node___locale',
  LastEditedByNodeName = 'lastEditedBy___node___name',
  LastEditedByNodeNicename = 'lastEditedBy___node___nicename',
  LastEditedByNodeNickname = 'lastEditedBy___node___nickname',
  LastEditedByNodePagesNodes = 'lastEditedBy___node___pages___nodes',
  LastEditedByNodePostsNodes = 'lastEditedBy___node___posts___nodes',
  LastEditedByNodeRegisteredDate = 'lastEditedBy___node___registeredDate',
  LastEditedByNodeRolesNodes = 'lastEditedBy___node___roles___nodes',
  LastEditedByNodeSlug = 'lastEditedBy___node___slug',
  LastEditedByNodeUri = 'lastEditedBy___node___uri',
  LastEditedByNodeUrl = 'lastEditedBy___node___url',
  LastEditedByNodeUsername = 'lastEditedBy___node___username',
  LastEditedByNodeNodeType = 'lastEditedBy___node___nodeType',
  LastEditedByNodeParentId = 'lastEditedBy___node___parent___id',
  LastEditedByNodeParentChildren = 'lastEditedBy___node___parent___children',
  LastEditedByNodeChildren = 'lastEditedBy___node___children',
  LastEditedByNodeChildrenId = 'lastEditedBy___node___children___id',
  LastEditedByNodeChildrenChildren = 'lastEditedBy___node___children___children',
  LastEditedByNodeInternalContent = 'lastEditedBy___node___internal___content',
  LastEditedByNodeInternalContentDigest = 'lastEditedBy___node___internal___contentDigest',
  LastEditedByNodeInternalDescription = 'lastEditedBy___node___internal___description',
  LastEditedByNodeInternalFieldOwners = 'lastEditedBy___node___internal___fieldOwners',
  LastEditedByNodeInternalIgnoreType = 'lastEditedBy___node___internal___ignoreType',
  LastEditedByNodeInternalMediaType = 'lastEditedBy___node___internal___mediaType',
  LastEditedByNodeInternalOwner = 'lastEditedBy___node___internal___owner',
  LastEditedByNodeInternalType = 'lastEditedBy___node___internal___type',
  Link = 'link',
  MenuOrder = 'menuOrder',
  Modified = 'modified',
  ModifiedGmt = 'modifiedGmt',
  WpParentNodeDatabaseId = 'wpParent___node___databaseId',
  WpParentNodeDate = 'wpParent___node___date',
  WpParentNodeDateGmt = 'wpParent___node___dateGmt',
  WpParentNodeDesiredSlug = 'wpParent___node___desiredSlug',
  WpParentNodeEnclosure = 'wpParent___node___enclosure',
  WpParentNodeGuid = 'wpParent___node___guid',
  WpParentNodeId = 'wpParent___node___id',
  WpParentNodeLink = 'wpParent___node___link',
  WpParentNodeModified = 'wpParent___node___modified',
  WpParentNodeModifiedGmt = 'wpParent___node___modifiedGmt',
  WpParentNodeSlug = 'wpParent___node___slug',
  WpParentNodeStatus = 'wpParent___node___status',
  WpParentNodeTemplateTemplateName = 'wpParent___node___template___templateName',
  WpParentNodeUri = 'wpParent___node___uri',
  WpParentNodeNodeType = 'wpParent___node___nodeType',
  ParentDatabaseId = 'parentDatabaseId',
  ParentId = 'parentId',
  Slug = 'slug',
  Status = 'status',
  TemplateTemplateName = 'template___templateName',
  Title = 'title',
  Uri = 'uri',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpPageFilterInput = {
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPageToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isFrontPage?: Maybe<BooleanQueryOperatorInput>;
  isPostsPage?: Maybe<BooleanQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  menuOrder?: Maybe<IntQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
  parentDatabaseId?: Maybe<IntQueryOperatorInput>;
  parentId?: Maybe<IdQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPageFilterListInput = {
  elemMatch?: Maybe<WpPageFilterInput>;
};

export type WpPageGroupConnection = {
  __typename?: 'WpPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpPageEdge>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPageSortInput = {
  fields?: Maybe<Array<Maybe<WpPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the page type and the Comment type */
export type WpPageToCommentConnection = {
  __typename?: 'WpPageToCommentConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpPageToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

/** The post type */
export type WpPost = Node & WpNode & WpContentNode & WpDatabaseIdentifier & WpNodeWithTemplate & WpUniformResourceIdentifiable & WpNodeWithTitle & WpNodeWithContentEditor & WpNodeWithAuthor & WpNodeWithFeaturedImage & WpNodeWithExcerpt & WpNodeWithComments & WpNodeWithTrackbacks & WpNodeWithRevisions & WpMenuItemLinkable & {
  __typename?: 'WpPost';
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the post type and the category type */
  categories?: Maybe<WpPostToCategoryConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the post type and the Comment type */
  comments?: Maybe<WpPostToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['Date']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the post type and the postFormat type */
  postFormats?: Maybe<WpPostToPostFormatConnection>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the post type and the tag type */
  tags?: Maybe<WpPostToTagConnection>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** Connection between the post type and the TermNode type */
  terms?: Maybe<WpPostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URI path for the resource */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


/** The post type */
export type WpPostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The post type */
export type WpPostDateGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The post type */
export type WpPostModifiedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The post type */
export type WpPostModifiedGmtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type WpPostConnection = {
  __typename?: 'WpPostConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpPostEdge>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpPostGroupConnection>;
};


export type WpPostConnectionDistinctArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPostFieldsEnum;
};

export type WpPostEdge = {
  __typename?: 'WpPostEdge';
  next?: Maybe<WpPost>;
  node: WpPost;
  previous?: Maybe<WpPost>;
};

export enum WpPostFieldsEnum {
  AuthorNodeAvatarDefault = 'author___node___avatar___default',
  AuthorNodeAvatarExtraAttr = 'author___node___avatar___extraAttr',
  AuthorNodeAvatarForceDefault = 'author___node___avatar___forceDefault',
  AuthorNodeAvatarFoundAvatar = 'author___node___avatar___foundAvatar',
  AuthorNodeAvatarHeight = 'author___node___avatar___height',
  AuthorNodeAvatarRating = 'author___node___avatar___rating',
  AuthorNodeAvatarScheme = 'author___node___avatar___scheme',
  AuthorNodeAvatarSize = 'author___node___avatar___size',
  AuthorNodeAvatarUrl = 'author___node___avatar___url',
  AuthorNodeAvatarWidth = 'author___node___avatar___width',
  AuthorNodeCapKey = 'author___node___capKey',
  AuthorNodeCapabilities = 'author___node___capabilities',
  AuthorNodeCommentsNodes = 'author___node___comments___nodes',
  AuthorNodeDatabaseId = 'author___node___databaseId',
  AuthorNodeDescription = 'author___node___description',
  AuthorNodeEmail = 'author___node___email',
  AuthorNodeExtraCapabilities = 'author___node___extraCapabilities',
  AuthorNodeFirstName = 'author___node___firstName',
  AuthorNodeId = 'author___node___id',
  AuthorNodeLastName = 'author___node___lastName',
  AuthorNodeLocale = 'author___node___locale',
  AuthorNodeName = 'author___node___name',
  AuthorNodeNicename = 'author___node___nicename',
  AuthorNodeNickname = 'author___node___nickname',
  AuthorNodePagesNodes = 'author___node___pages___nodes',
  AuthorNodePostsNodes = 'author___node___posts___nodes',
  AuthorNodeRegisteredDate = 'author___node___registeredDate',
  AuthorNodeRolesNodes = 'author___node___roles___nodes',
  AuthorNodeSlug = 'author___node___slug',
  AuthorNodeUri = 'author___node___uri',
  AuthorNodeUrl = 'author___node___url',
  AuthorNodeUsername = 'author___node___username',
  AuthorNodeNodeType = 'author___node___nodeType',
  AuthorNodeParentId = 'author___node___parent___id',
  AuthorNodeParentChildren = 'author___node___parent___children',
  AuthorNodeChildren = 'author___node___children',
  AuthorNodeChildrenId = 'author___node___children___id',
  AuthorNodeChildrenChildren = 'author___node___children___children',
  AuthorNodeInternalContent = 'author___node___internal___content',
  AuthorNodeInternalContentDigest = 'author___node___internal___contentDigest',
  AuthorNodeInternalDescription = 'author___node___internal___description',
  AuthorNodeInternalFieldOwners = 'author___node___internal___fieldOwners',
  AuthorNodeInternalIgnoreType = 'author___node___internal___ignoreType',
  AuthorNodeInternalMediaType = 'author___node___internal___mediaType',
  AuthorNodeInternalOwner = 'author___node___internal___owner',
  AuthorNodeInternalType = 'author___node___internal___type',
  AuthorDatabaseId = 'authorDatabaseId',
  AuthorId = 'authorId',
  CategoriesNodes = 'categories___nodes',
  CategoriesNodesAncestorsNodes = 'categories___nodes___ancestors___nodes',
  CategoriesNodesWpChildrenNodes = 'categories___nodes___wpChildren___nodes',
  CategoriesNodesContentNodesNodes = 'categories___nodes___contentNodes___nodes',
  CategoriesNodesCount = 'categories___nodes___count',
  CategoriesNodesDatabaseId = 'categories___nodes___databaseId',
  CategoriesNodesDescription = 'categories___nodes___description',
  CategoriesNodesId = 'categories___nodes___id',
  CategoriesNodesLink = 'categories___nodes___link',
  CategoriesNodesName = 'categories___nodes___name',
  CategoriesNodesParentDatabaseId = 'categories___nodes___parentDatabaseId',
  CategoriesNodesParentId = 'categories___nodes___parentId',
  CategoriesNodesPostsNodes = 'categories___nodes___posts___nodes',
  CategoriesNodesSlug = 'categories___nodes___slug',
  CategoriesNodesTermGroupId = 'categories___nodes___termGroupId',
  CategoriesNodesTermTaxonomyId = 'categories___nodes___termTaxonomyId',
  CategoriesNodesUri = 'categories___nodes___uri',
  CategoriesNodesNodeType = 'categories___nodes___nodeType',
  CategoriesNodesParentId = 'categories___nodes___parent___id',
  CategoriesNodesParentChildren = 'categories___nodes___parent___children',
  CategoriesNodesChildren = 'categories___nodes___children',
  CategoriesNodesChildrenId = 'categories___nodes___children___id',
  CategoriesNodesChildrenChildren = 'categories___nodes___children___children',
  CategoriesNodesInternalContent = 'categories___nodes___internal___content',
  CategoriesNodesInternalContentDigest = 'categories___nodes___internal___contentDigest',
  CategoriesNodesInternalDescription = 'categories___nodes___internal___description',
  CategoriesNodesInternalFieldOwners = 'categories___nodes___internal___fieldOwners',
  CategoriesNodesInternalIgnoreType = 'categories___nodes___internal___ignoreType',
  CategoriesNodesInternalMediaType = 'categories___nodes___internal___mediaType',
  CategoriesNodesInternalOwner = 'categories___nodes___internal___owner',
  CategoriesNodesInternalType = 'categories___nodes___internal___type',
  CommentCount = 'commentCount',
  CommentStatus = 'commentStatus',
  CommentsNodes = 'comments___nodes',
  CommentsNodesAgent = 'comments___nodes___agent',
  CommentsNodesApproved = 'comments___nodes___approved',
  CommentsNodesAuthorIp = 'comments___nodes___authorIp',
  CommentsNodesContent = 'comments___nodes___content',
  CommentsNodesDatabaseId = 'comments___nodes___databaseId',
  CommentsNodesDate = 'comments___nodes___date',
  CommentsNodesDateGmt = 'comments___nodes___dateGmt',
  CommentsNodesId = 'comments___nodes___id',
  CommentsNodesKarma = 'comments___nodes___karma',
  CommentsNodesParentDatabaseId = 'comments___nodes___parentDatabaseId',
  CommentsNodesParentId = 'comments___nodes___parentId',
  CommentsNodesRepliesNodes = 'comments___nodes___replies___nodes',
  CommentsNodesType = 'comments___nodes___type',
  CommentsNodesNodeType = 'comments___nodes___nodeType',
  CommentsNodesParentId = 'comments___nodes___parent___id',
  CommentsNodesParentChildren = 'comments___nodes___parent___children',
  CommentsNodesChildren = 'comments___nodes___children',
  CommentsNodesChildrenId = 'comments___nodes___children___id',
  CommentsNodesChildrenChildren = 'comments___nodes___children___children',
  CommentsNodesInternalContent = 'comments___nodes___internal___content',
  CommentsNodesInternalContentDigest = 'comments___nodes___internal___contentDigest',
  CommentsNodesInternalDescription = 'comments___nodes___internal___description',
  CommentsNodesInternalFieldOwners = 'comments___nodes___internal___fieldOwners',
  CommentsNodesInternalIgnoreType = 'comments___nodes___internal___ignoreType',
  CommentsNodesInternalMediaType = 'comments___nodes___internal___mediaType',
  CommentsNodesInternalOwner = 'comments___nodes___internal___owner',
  CommentsNodesInternalType = 'comments___nodes___internal___type',
  Content = 'content',
  ContentTypeNodeArchivePath = 'contentType___node___archivePath',
  ContentTypeNodeCanExport = 'contentType___node___canExport',
  ContentTypeNodeConnectedTaxonomiesNodes = 'contentType___node___connectedTaxonomies___nodes',
  ContentTypeNodeContentNodesNodes = 'contentType___node___contentNodes___nodes',
  ContentTypeNodeDeleteWithUser = 'contentType___node___deleteWithUser',
  ContentTypeNodeDescription = 'contentType___node___description',
  ContentTypeNodeExcludeFromSearch = 'contentType___node___excludeFromSearch',
  ContentTypeNodeGraphqlPluralName = 'contentType___node___graphqlPluralName',
  ContentTypeNodeGraphqlSingleName = 'contentType___node___graphqlSingleName',
  ContentTypeNodeHasArchive = 'contentType___node___hasArchive',
  ContentTypeNodeHierarchical = 'contentType___node___hierarchical',
  ContentTypeNodeId = 'contentType___node___id',
  ContentTypeNodeIsFrontPage = 'contentType___node___isFrontPage',
  ContentTypeNodeIsPostsPage = 'contentType___node___isPostsPage',
  ContentTypeNodeLabel = 'contentType___node___label',
  ContentTypeNodeLabelsAddNew = 'contentType___node___labels___addNew',
  ContentTypeNodeLabelsAddNewItem = 'contentType___node___labels___addNewItem',
  ContentTypeNodeLabelsAllItems = 'contentType___node___labels___allItems',
  ContentTypeNodeLabelsArchives = 'contentType___node___labels___archives',
  ContentTypeNodeLabelsAttributes = 'contentType___node___labels___attributes',
  ContentTypeNodeLabelsEditItem = 'contentType___node___labels___editItem',
  ContentTypeNodeLabelsFeaturedImage = 'contentType___node___labels___featuredImage',
  ContentTypeNodeLabelsFilterItemsList = 'contentType___node___labels___filterItemsList',
  ContentTypeNodeLabelsInsertIntoItem = 'contentType___node___labels___insertIntoItem',
  ContentTypeNodeLabelsItemsList = 'contentType___node___labels___itemsList',
  ContentTypeNodeLabelsItemsListNavigation = 'contentType___node___labels___itemsListNavigation',
  ContentTypeNodeLabelsMenuName = 'contentType___node___labels___menuName',
  ContentTypeNodeLabelsName = 'contentType___node___labels___name',
  ContentTypeNodeLabelsNewItem = 'contentType___node___labels___newItem',
  ContentTypeNodeLabelsNotFound = 'contentType___node___labels___notFound',
  ContentTypeNodeLabelsNotFoundInTrash = 'contentType___node___labels___notFoundInTrash',
  ContentTypeNodeLabelsParentItemColon = 'contentType___node___labels___parentItemColon',
  ContentTypeNodeLabelsRemoveFeaturedImage = 'contentType___node___labels___removeFeaturedImage',
  ContentTypeNodeLabelsSearchItems = 'contentType___node___labels___searchItems',
  ContentTypeNodeLabelsSetFeaturedImage = 'contentType___node___labels___setFeaturedImage',
  ContentTypeNodeLabelsSingularName = 'contentType___node___labels___singularName',
  ContentTypeNodeLabelsUploadedToThisItem = 'contentType___node___labels___uploadedToThisItem',
  ContentTypeNodeLabelsUseFeaturedImage = 'contentType___node___labels___useFeaturedImage',
  ContentTypeNodeLabelsViewItem = 'contentType___node___labels___viewItem',
  ContentTypeNodeLabelsViewItems = 'contentType___node___labels___viewItems',
  ContentTypeNodeMenuIcon = 'contentType___node___menuIcon',
  ContentTypeNodeMenuPosition = 'contentType___node___menuPosition',
  ContentTypeNodeName = 'contentType___node___name',
  ContentTypeNodePublic = 'contentType___node___public',
  ContentTypeNodePubliclyQueryable = 'contentType___node___publiclyQueryable',
  ContentTypeNodeRestBase = 'contentType___node___restBase',
  ContentTypeNodeRestControllerClass = 'contentType___node___restControllerClass',
  ContentTypeNodeShowInAdminBar = 'contentType___node___showInAdminBar',
  ContentTypeNodeShowInGraphql = 'contentType___node___showInGraphql',
  ContentTypeNodeShowInMenu = 'contentType___node___showInMenu',
  ContentTypeNodeShowInNavMenus = 'contentType___node___showInNavMenus',
  ContentTypeNodeShowInRest = 'contentType___node___showInRest',
  ContentTypeNodeShowUi = 'contentType___node___showUi',
  ContentTypeNodeUri = 'contentType___node___uri',
  ContentTypeNodeNodeType = 'contentType___node___nodeType',
  ContentTypeNodeParentId = 'contentType___node___parent___id',
  ContentTypeNodeParentChildren = 'contentType___node___parent___children',
  ContentTypeNodeChildren = 'contentType___node___children',
  ContentTypeNodeChildrenId = 'contentType___node___children___id',
  ContentTypeNodeChildrenChildren = 'contentType___node___children___children',
  ContentTypeNodeInternalContent = 'contentType___node___internal___content',
  ContentTypeNodeInternalContentDigest = 'contentType___node___internal___contentDigest',
  ContentTypeNodeInternalDescription = 'contentType___node___internal___description',
  ContentTypeNodeInternalFieldOwners = 'contentType___node___internal___fieldOwners',
  ContentTypeNodeInternalIgnoreType = 'contentType___node___internal___ignoreType',
  ContentTypeNodeInternalMediaType = 'contentType___node___internal___mediaType',
  ContentTypeNodeInternalOwner = 'contentType___node___internal___owner',
  ContentTypeNodeInternalType = 'contentType___node___internal___type',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  DesiredSlug = 'desiredSlug',
  Enclosure = 'enclosure',
  Excerpt = 'excerpt',
  FeaturedImageNodeAltText = 'featuredImage___node___altText',
  FeaturedImageNodeAncestorsNodes = 'featuredImage___node___ancestors___nodes',
  FeaturedImageNodeAuthorDatabaseId = 'featuredImage___node___authorDatabaseId',
  FeaturedImageNodeAuthorId = 'featuredImage___node___authorId',
  FeaturedImageNodeCaption = 'featuredImage___node___caption',
  FeaturedImageNodeWpChildrenNodes = 'featuredImage___node___wpChildren___nodes',
  FeaturedImageNodeCommentCount = 'featuredImage___node___commentCount',
  FeaturedImageNodeCommentStatus = 'featuredImage___node___commentStatus',
  FeaturedImageNodeCommentsNodes = 'featuredImage___node___comments___nodes',
  FeaturedImageNodeDatabaseId = 'featuredImage___node___databaseId',
  FeaturedImageNodeDate = 'featuredImage___node___date',
  FeaturedImageNodeDateGmt = 'featuredImage___node___dateGmt',
  FeaturedImageNodeDescription = 'featuredImage___node___description',
  FeaturedImageNodeDesiredSlug = 'featuredImage___node___desiredSlug',
  FeaturedImageNodeEnclosure = 'featuredImage___node___enclosure',
  FeaturedImageNodeFileSize = 'featuredImage___node___fileSize',
  FeaturedImageNodeGuid = 'featuredImage___node___guid',
  FeaturedImageNodeId = 'featuredImage___node___id',
  FeaturedImageNodeLink = 'featuredImage___node___link',
  FeaturedImageNodeMediaDetailsFile = 'featuredImage___node___mediaDetails___file',
  FeaturedImageNodeMediaDetailsHeight = 'featuredImage___node___mediaDetails___height',
  FeaturedImageNodeMediaDetailsSizes = 'featuredImage___node___mediaDetails___sizes',
  FeaturedImageNodeMediaDetailsWidth = 'featuredImage___node___mediaDetails___width',
  FeaturedImageNodeMediaItemUrl = 'featuredImage___node___mediaItemUrl',
  FeaturedImageNodeMediaType = 'featuredImage___node___mediaType',
  FeaturedImageNodeMimeType = 'featuredImage___node___mimeType',
  FeaturedImageNodeModified = 'featuredImage___node___modified',
  FeaturedImageNodeModifiedGmt = 'featuredImage___node___modifiedGmt',
  FeaturedImageNodeParentDatabaseId = 'featuredImage___node___parentDatabaseId',
  FeaturedImageNodeParentId = 'featuredImage___node___parentId',
  FeaturedImageNodeSizes = 'featuredImage___node___sizes',
  FeaturedImageNodeSlug = 'featuredImage___node___slug',
  FeaturedImageNodeSourceUrl = 'featuredImage___node___sourceUrl',
  FeaturedImageNodeSrcSet = 'featuredImage___node___srcSet',
  FeaturedImageNodeStatus = 'featuredImage___node___status',
  FeaturedImageNodeTemplateTemplateName = 'featuredImage___node___template___templateName',
  FeaturedImageNodeTitle = 'featuredImage___node___title',
  FeaturedImageNodeUri = 'featuredImage___node___uri',
  FeaturedImageNodeNodeType = 'featuredImage___node___nodeType',
  FeaturedImageNodeRemoteFileSourceInstanceName = 'featuredImage___node___remoteFile___sourceInstanceName',
  FeaturedImageNodeRemoteFileAbsolutePath = 'featuredImage___node___remoteFile___absolutePath',
  FeaturedImageNodeRemoteFileRelativePath = 'featuredImage___node___remoteFile___relativePath',
  FeaturedImageNodeRemoteFileExtension = 'featuredImage___node___remoteFile___extension',
  FeaturedImageNodeRemoteFileSize = 'featuredImage___node___remoteFile___size',
  FeaturedImageNodeRemoteFilePrettySize = 'featuredImage___node___remoteFile___prettySize',
  FeaturedImageNodeRemoteFileModifiedTime = 'featuredImage___node___remoteFile___modifiedTime',
  FeaturedImageNodeRemoteFileAccessTime = 'featuredImage___node___remoteFile___accessTime',
  FeaturedImageNodeRemoteFileChangeTime = 'featuredImage___node___remoteFile___changeTime',
  FeaturedImageNodeRemoteFileBirthTime = 'featuredImage___node___remoteFile___birthTime',
  FeaturedImageNodeRemoteFileRoot = 'featuredImage___node___remoteFile___root',
  FeaturedImageNodeRemoteFileDir = 'featuredImage___node___remoteFile___dir',
  FeaturedImageNodeRemoteFileBase = 'featuredImage___node___remoteFile___base',
  FeaturedImageNodeRemoteFileExt = 'featuredImage___node___remoteFile___ext',
  FeaturedImageNodeRemoteFileName = 'featuredImage___node___remoteFile___name',
  FeaturedImageNodeRemoteFileRelativeDirectory = 'featuredImage___node___remoteFile___relativeDirectory',
  FeaturedImageNodeRemoteFileDev = 'featuredImage___node___remoteFile___dev',
  FeaturedImageNodeRemoteFileMode = 'featuredImage___node___remoteFile___mode',
  FeaturedImageNodeRemoteFileNlink = 'featuredImage___node___remoteFile___nlink',
  FeaturedImageNodeRemoteFileUid = 'featuredImage___node___remoteFile___uid',
  FeaturedImageNodeRemoteFileGid = 'featuredImage___node___remoteFile___gid',
  FeaturedImageNodeRemoteFileRdev = 'featuredImage___node___remoteFile___rdev',
  FeaturedImageNodeRemoteFileIno = 'featuredImage___node___remoteFile___ino',
  FeaturedImageNodeRemoteFileAtimeMs = 'featuredImage___node___remoteFile___atimeMs',
  FeaturedImageNodeRemoteFileMtimeMs = 'featuredImage___node___remoteFile___mtimeMs',
  FeaturedImageNodeRemoteFileCtimeMs = 'featuredImage___node___remoteFile___ctimeMs',
  FeaturedImageNodeRemoteFileAtime = 'featuredImage___node___remoteFile___atime',
  FeaturedImageNodeRemoteFileMtime = 'featuredImage___node___remoteFile___mtime',
  FeaturedImageNodeRemoteFileCtime = 'featuredImage___node___remoteFile___ctime',
  FeaturedImageNodeRemoteFileBirthtime = 'featuredImage___node___remoteFile___birthtime',
  FeaturedImageNodeRemoteFileBirthtimeMs = 'featuredImage___node___remoteFile___birthtimeMs',
  FeaturedImageNodeRemoteFileBlksize = 'featuredImage___node___remoteFile___blksize',
  FeaturedImageNodeRemoteFileBlocks = 'featuredImage___node___remoteFile___blocks',
  FeaturedImageNodeRemoteFilePublicUrl = 'featuredImage___node___remoteFile___publicURL',
  FeaturedImageNodeRemoteFileChildrenImageSharp = 'featuredImage___node___remoteFile___childrenImageSharp',
  FeaturedImageNodeRemoteFileId = 'featuredImage___node___remoteFile___id',
  FeaturedImageNodeRemoteFileChildren = 'featuredImage___node___remoteFile___children',
  FeaturedImageNodeLocalFileSourceInstanceName = 'featuredImage___node___localFile___sourceInstanceName',
  FeaturedImageNodeLocalFileAbsolutePath = 'featuredImage___node___localFile___absolutePath',
  FeaturedImageNodeLocalFileRelativePath = 'featuredImage___node___localFile___relativePath',
  FeaturedImageNodeLocalFileExtension = 'featuredImage___node___localFile___extension',
  FeaturedImageNodeLocalFileSize = 'featuredImage___node___localFile___size',
  FeaturedImageNodeLocalFilePrettySize = 'featuredImage___node___localFile___prettySize',
  FeaturedImageNodeLocalFileModifiedTime = 'featuredImage___node___localFile___modifiedTime',
  FeaturedImageNodeLocalFileAccessTime = 'featuredImage___node___localFile___accessTime',
  FeaturedImageNodeLocalFileChangeTime = 'featuredImage___node___localFile___changeTime',
  FeaturedImageNodeLocalFileBirthTime = 'featuredImage___node___localFile___birthTime',
  FeaturedImageNodeLocalFileRoot = 'featuredImage___node___localFile___root',
  FeaturedImageNodeLocalFileDir = 'featuredImage___node___localFile___dir',
  FeaturedImageNodeLocalFileBase = 'featuredImage___node___localFile___base',
  FeaturedImageNodeLocalFileExt = 'featuredImage___node___localFile___ext',
  FeaturedImageNodeLocalFileName = 'featuredImage___node___localFile___name',
  FeaturedImageNodeLocalFileRelativeDirectory = 'featuredImage___node___localFile___relativeDirectory',
  FeaturedImageNodeLocalFileDev = 'featuredImage___node___localFile___dev',
  FeaturedImageNodeLocalFileMode = 'featuredImage___node___localFile___mode',
  FeaturedImageNodeLocalFileNlink = 'featuredImage___node___localFile___nlink',
  FeaturedImageNodeLocalFileUid = 'featuredImage___node___localFile___uid',
  FeaturedImageNodeLocalFileGid = 'featuredImage___node___localFile___gid',
  FeaturedImageNodeLocalFileRdev = 'featuredImage___node___localFile___rdev',
  FeaturedImageNodeLocalFileIno = 'featuredImage___node___localFile___ino',
  FeaturedImageNodeLocalFileAtimeMs = 'featuredImage___node___localFile___atimeMs',
  FeaturedImageNodeLocalFileMtimeMs = 'featuredImage___node___localFile___mtimeMs',
  FeaturedImageNodeLocalFileCtimeMs = 'featuredImage___node___localFile___ctimeMs',
  FeaturedImageNodeLocalFileAtime = 'featuredImage___node___localFile___atime',
  FeaturedImageNodeLocalFileMtime = 'featuredImage___node___localFile___mtime',
  FeaturedImageNodeLocalFileCtime = 'featuredImage___node___localFile___ctime',
  FeaturedImageNodeLocalFileBirthtime = 'featuredImage___node___localFile___birthtime',
  FeaturedImageNodeLocalFileBirthtimeMs = 'featuredImage___node___localFile___birthtimeMs',
  FeaturedImageNodeLocalFileBlksize = 'featuredImage___node___localFile___blksize',
  FeaturedImageNodeLocalFileBlocks = 'featuredImage___node___localFile___blocks',
  FeaturedImageNodeLocalFilePublicUrl = 'featuredImage___node___localFile___publicURL',
  FeaturedImageNodeLocalFileChildrenImageSharp = 'featuredImage___node___localFile___childrenImageSharp',
  FeaturedImageNodeLocalFileId = 'featuredImage___node___localFile___id',
  FeaturedImageNodeLocalFileChildren = 'featuredImage___node___localFile___children',
  FeaturedImageNodeParentId = 'featuredImage___node___parent___id',
  FeaturedImageNodeParentChildren = 'featuredImage___node___parent___children',
  FeaturedImageNodeChildren = 'featuredImage___node___children',
  FeaturedImageNodeChildrenId = 'featuredImage___node___children___id',
  FeaturedImageNodeChildrenChildren = 'featuredImage___node___children___children',
  FeaturedImageNodeInternalContent = 'featuredImage___node___internal___content',
  FeaturedImageNodeInternalContentDigest = 'featuredImage___node___internal___contentDigest',
  FeaturedImageNodeInternalDescription = 'featuredImage___node___internal___description',
  FeaturedImageNodeInternalFieldOwners = 'featuredImage___node___internal___fieldOwners',
  FeaturedImageNodeInternalIgnoreType = 'featuredImage___node___internal___ignoreType',
  FeaturedImageNodeInternalMediaType = 'featuredImage___node___internal___mediaType',
  FeaturedImageNodeInternalOwner = 'featuredImage___node___internal___owner',
  FeaturedImageNodeInternalType = 'featuredImage___node___internal___type',
  FeaturedImageDatabaseId = 'featuredImageDatabaseId',
  FeaturedImageId = 'featuredImageId',
  Guid = 'guid',
  Id = 'id',
  IsRevision = 'isRevision',
  IsSticky = 'isSticky',
  LastEditedByNodeAvatarDefault = 'lastEditedBy___node___avatar___default',
  LastEditedByNodeAvatarExtraAttr = 'lastEditedBy___node___avatar___extraAttr',
  LastEditedByNodeAvatarForceDefault = 'lastEditedBy___node___avatar___forceDefault',
  LastEditedByNodeAvatarFoundAvatar = 'lastEditedBy___node___avatar___foundAvatar',
  LastEditedByNodeAvatarHeight = 'lastEditedBy___node___avatar___height',
  LastEditedByNodeAvatarRating = 'lastEditedBy___node___avatar___rating',
  LastEditedByNodeAvatarScheme = 'lastEditedBy___node___avatar___scheme',
  LastEditedByNodeAvatarSize = 'lastEditedBy___node___avatar___size',
  LastEditedByNodeAvatarUrl = 'lastEditedBy___node___avatar___url',
  LastEditedByNodeAvatarWidth = 'lastEditedBy___node___avatar___width',
  LastEditedByNodeCapKey = 'lastEditedBy___node___capKey',
  LastEditedByNodeCapabilities = 'lastEditedBy___node___capabilities',
  LastEditedByNodeCommentsNodes = 'lastEditedBy___node___comments___nodes',
  LastEditedByNodeDatabaseId = 'lastEditedBy___node___databaseId',
  LastEditedByNodeDescription = 'lastEditedBy___node___description',
  LastEditedByNodeEmail = 'lastEditedBy___node___email',
  LastEditedByNodeExtraCapabilities = 'lastEditedBy___node___extraCapabilities',
  LastEditedByNodeFirstName = 'lastEditedBy___node___firstName',
  LastEditedByNodeId = 'lastEditedBy___node___id',
  LastEditedByNodeLastName = 'lastEditedBy___node___lastName',
  LastEditedByNodeLocale = 'lastEditedBy___node___locale',
  LastEditedByNodeName = 'lastEditedBy___node___name',
  LastEditedByNodeNicename = 'lastEditedBy___node___nicename',
  LastEditedByNodeNickname = 'lastEditedBy___node___nickname',
  LastEditedByNodePagesNodes = 'lastEditedBy___node___pages___nodes',
  LastEditedByNodePostsNodes = 'lastEditedBy___node___posts___nodes',
  LastEditedByNodeRegisteredDate = 'lastEditedBy___node___registeredDate',
  LastEditedByNodeRolesNodes = 'lastEditedBy___node___roles___nodes',
  LastEditedByNodeSlug = 'lastEditedBy___node___slug',
  LastEditedByNodeUri = 'lastEditedBy___node___uri',
  LastEditedByNodeUrl = 'lastEditedBy___node___url',
  LastEditedByNodeUsername = 'lastEditedBy___node___username',
  LastEditedByNodeNodeType = 'lastEditedBy___node___nodeType',
  LastEditedByNodeParentId = 'lastEditedBy___node___parent___id',
  LastEditedByNodeParentChildren = 'lastEditedBy___node___parent___children',
  LastEditedByNodeChildren = 'lastEditedBy___node___children',
  LastEditedByNodeChildrenId = 'lastEditedBy___node___children___id',
  LastEditedByNodeChildrenChildren = 'lastEditedBy___node___children___children',
  LastEditedByNodeInternalContent = 'lastEditedBy___node___internal___content',
  LastEditedByNodeInternalContentDigest = 'lastEditedBy___node___internal___contentDigest',
  LastEditedByNodeInternalDescription = 'lastEditedBy___node___internal___description',
  LastEditedByNodeInternalFieldOwners = 'lastEditedBy___node___internal___fieldOwners',
  LastEditedByNodeInternalIgnoreType = 'lastEditedBy___node___internal___ignoreType',
  LastEditedByNodeInternalMediaType = 'lastEditedBy___node___internal___mediaType',
  LastEditedByNodeInternalOwner = 'lastEditedBy___node___internal___owner',
  LastEditedByNodeInternalType = 'lastEditedBy___node___internal___type',
  Link = 'link',
  Modified = 'modified',
  ModifiedGmt = 'modifiedGmt',
  PingStatus = 'pingStatus',
  Pinged = 'pinged',
  PostFormatsNodes = 'postFormats___nodes',
  PostFormatsNodesContentNodesNodes = 'postFormats___nodes___contentNodes___nodes',
  PostFormatsNodesCount = 'postFormats___nodes___count',
  PostFormatsNodesDatabaseId = 'postFormats___nodes___databaseId',
  PostFormatsNodesDescription = 'postFormats___nodes___description',
  PostFormatsNodesId = 'postFormats___nodes___id',
  PostFormatsNodesLink = 'postFormats___nodes___link',
  PostFormatsNodesName = 'postFormats___nodes___name',
  PostFormatsNodesPostsNodes = 'postFormats___nodes___posts___nodes',
  PostFormatsNodesSlug = 'postFormats___nodes___slug',
  PostFormatsNodesTermGroupId = 'postFormats___nodes___termGroupId',
  PostFormatsNodesTermTaxonomyId = 'postFormats___nodes___termTaxonomyId',
  PostFormatsNodesUri = 'postFormats___nodes___uri',
  PostFormatsNodesNodeType = 'postFormats___nodes___nodeType',
  PostFormatsNodesParentId = 'postFormats___nodes___parent___id',
  PostFormatsNodesParentChildren = 'postFormats___nodes___parent___children',
  PostFormatsNodesChildren = 'postFormats___nodes___children',
  PostFormatsNodesChildrenId = 'postFormats___nodes___children___id',
  PostFormatsNodesChildrenChildren = 'postFormats___nodes___children___children',
  PostFormatsNodesInternalContent = 'postFormats___nodes___internal___content',
  PostFormatsNodesInternalContentDigest = 'postFormats___nodes___internal___contentDigest',
  PostFormatsNodesInternalDescription = 'postFormats___nodes___internal___description',
  PostFormatsNodesInternalFieldOwners = 'postFormats___nodes___internal___fieldOwners',
  PostFormatsNodesInternalIgnoreType = 'postFormats___nodes___internal___ignoreType',
  PostFormatsNodesInternalMediaType = 'postFormats___nodes___internal___mediaType',
  PostFormatsNodesInternalOwner = 'postFormats___nodes___internal___owner',
  PostFormatsNodesInternalType = 'postFormats___nodes___internal___type',
  Slug = 'slug',
  Status = 'status',
  TagsNodes = 'tags___nodes',
  TagsNodesContentNodesNodes = 'tags___nodes___contentNodes___nodes',
  TagsNodesCount = 'tags___nodes___count',
  TagsNodesDatabaseId = 'tags___nodes___databaseId',
  TagsNodesDescription = 'tags___nodes___description',
  TagsNodesId = 'tags___nodes___id',
  TagsNodesLink = 'tags___nodes___link',
  TagsNodesName = 'tags___nodes___name',
  TagsNodesPostsNodes = 'tags___nodes___posts___nodes',
  TagsNodesSlug = 'tags___nodes___slug',
  TagsNodesTermGroupId = 'tags___nodes___termGroupId',
  TagsNodesTermTaxonomyId = 'tags___nodes___termTaxonomyId',
  TagsNodesUri = 'tags___nodes___uri',
  TagsNodesNodeType = 'tags___nodes___nodeType',
  TagsNodesParentId = 'tags___nodes___parent___id',
  TagsNodesParentChildren = 'tags___nodes___parent___children',
  TagsNodesChildren = 'tags___nodes___children',
  TagsNodesChildrenId = 'tags___nodes___children___id',
  TagsNodesChildrenChildren = 'tags___nodes___children___children',
  TagsNodesInternalContent = 'tags___nodes___internal___content',
  TagsNodesInternalContentDigest = 'tags___nodes___internal___contentDigest',
  TagsNodesInternalDescription = 'tags___nodes___internal___description',
  TagsNodesInternalFieldOwners = 'tags___nodes___internal___fieldOwners',
  TagsNodesInternalIgnoreType = 'tags___nodes___internal___ignoreType',
  TagsNodesInternalMediaType = 'tags___nodes___internal___mediaType',
  TagsNodesInternalOwner = 'tags___nodes___internal___owner',
  TagsNodesInternalType = 'tags___nodes___internal___type',
  TemplateTemplateName = 'template___templateName',
  TermsNodes = 'terms___nodes',
  TermsNodesCount = 'terms___nodes___count',
  TermsNodesDatabaseId = 'terms___nodes___databaseId',
  TermsNodesDescription = 'terms___nodes___description',
  TermsNodesId = 'terms___nodes___id',
  TermsNodesLink = 'terms___nodes___link',
  TermsNodesName = 'terms___nodes___name',
  TermsNodesSlug = 'terms___nodes___slug',
  TermsNodesTermGroupId = 'terms___nodes___termGroupId',
  TermsNodesTermTaxonomyId = 'terms___nodes___termTaxonomyId',
  TermsNodesUri = 'terms___nodes___uri',
  TermsNodesNodeType = 'terms___nodes___nodeType',
  Title = 'title',
  ToPing = 'toPing',
  Uri = 'uri',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpPostFilterInput = {
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: Maybe<IntQueryOperatorInput>;
  authorId?: Maybe<IdQueryOperatorInput>;
  categories?: Maybe<WpPostToCategoryConnectionFilterInput>;
  commentCount?: Maybe<IntQueryOperatorInput>;
  commentStatus?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpPostToCommentConnectionFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  dateGmt?: Maybe<DateQueryOperatorInput>;
  desiredSlug?: Maybe<StringQueryOperatorInput>;
  enclosure?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: Maybe<IntQueryOperatorInput>;
  featuredImageId?: Maybe<IdQueryOperatorInput>;
  guid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  isRevision?: Maybe<BooleanQueryOperatorInput>;
  isSticky?: Maybe<BooleanQueryOperatorInput>;
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  modified?: Maybe<DateQueryOperatorInput>;
  modifiedGmt?: Maybe<DateQueryOperatorInput>;
  pingStatus?: Maybe<StringQueryOperatorInput>;
  pinged?: Maybe<StringQueryOperatorInput>;
  postFormats?: Maybe<WpPostToPostFormatConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<WpPostToTagConnectionFilterInput>;
  template?: Maybe<WpContentTemplateFilterInput>;
  terms?: Maybe<WpPostToTermNodeConnectionFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  toPing?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPostFilterListInput = {
  elemMatch?: Maybe<WpPostFilterInput>;
};

/** The postFormat type */
export type WpPostFormat = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & {
  __typename?: 'WpPostFormat';
  /** Connection between the postFormat type and the ContentNode type */
  contentNodes?: Maybe<WpPostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the post type */
  posts?: Maybe<WpPostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the Taxonomy type */
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpPostFormatConnection = {
  __typename?: 'WpPostFormatConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpPostFormatEdge>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpPostFormatGroupConnection>;
};


export type WpPostFormatConnectionDistinctArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpPostFormatFieldsEnum;
};

export type WpPostFormatEdge = {
  __typename?: 'WpPostFormatEdge';
  next?: Maybe<WpPostFormat>;
  node: WpPostFormat;
  previous?: Maybe<WpPostFormat>;
};

export enum WpPostFormatFieldsEnum {
  ContentNodesNodes = 'contentNodes___nodes',
  ContentNodesNodesDatabaseId = 'contentNodes___nodes___databaseId',
  ContentNodesNodesDate = 'contentNodes___nodes___date',
  ContentNodesNodesDateGmt = 'contentNodes___nodes___dateGmt',
  ContentNodesNodesDesiredSlug = 'contentNodes___nodes___desiredSlug',
  ContentNodesNodesEnclosure = 'contentNodes___nodes___enclosure',
  ContentNodesNodesGuid = 'contentNodes___nodes___guid',
  ContentNodesNodesId = 'contentNodes___nodes___id',
  ContentNodesNodesLink = 'contentNodes___nodes___link',
  ContentNodesNodesModified = 'contentNodes___nodes___modified',
  ContentNodesNodesModifiedGmt = 'contentNodes___nodes___modifiedGmt',
  ContentNodesNodesSlug = 'contentNodes___nodes___slug',
  ContentNodesNodesStatus = 'contentNodes___nodes___status',
  ContentNodesNodesTemplateTemplateName = 'contentNodes___nodes___template___templateName',
  ContentNodesNodesUri = 'contentNodes___nodes___uri',
  ContentNodesNodesNodeType = 'contentNodes___nodes___nodeType',
  Count = 'count',
  DatabaseId = 'databaseId',
  Description = 'description',
  Id = 'id',
  Link = 'link',
  Name = 'name',
  PostsNodes = 'posts___nodes',
  PostsNodesAuthorDatabaseId = 'posts___nodes___authorDatabaseId',
  PostsNodesAuthorId = 'posts___nodes___authorId',
  PostsNodesCategoriesNodes = 'posts___nodes___categories___nodes',
  PostsNodesCommentCount = 'posts___nodes___commentCount',
  PostsNodesCommentStatus = 'posts___nodes___commentStatus',
  PostsNodesCommentsNodes = 'posts___nodes___comments___nodes',
  PostsNodesContent = 'posts___nodes___content',
  PostsNodesDatabaseId = 'posts___nodes___databaseId',
  PostsNodesDate = 'posts___nodes___date',
  PostsNodesDateGmt = 'posts___nodes___dateGmt',
  PostsNodesDesiredSlug = 'posts___nodes___desiredSlug',
  PostsNodesEnclosure = 'posts___nodes___enclosure',
  PostsNodesExcerpt = 'posts___nodes___excerpt',
  PostsNodesFeaturedImageDatabaseId = 'posts___nodes___featuredImageDatabaseId',
  PostsNodesFeaturedImageId = 'posts___nodes___featuredImageId',
  PostsNodesGuid = 'posts___nodes___guid',
  PostsNodesId = 'posts___nodes___id',
  PostsNodesIsRevision = 'posts___nodes___isRevision',
  PostsNodesIsSticky = 'posts___nodes___isSticky',
  PostsNodesLink = 'posts___nodes___link',
  PostsNodesModified = 'posts___nodes___modified',
  PostsNodesModifiedGmt = 'posts___nodes___modifiedGmt',
  PostsNodesPingStatus = 'posts___nodes___pingStatus',
  PostsNodesPinged = 'posts___nodes___pinged',
  PostsNodesPostFormatsNodes = 'posts___nodes___postFormats___nodes',
  PostsNodesSlug = 'posts___nodes___slug',
  PostsNodesStatus = 'posts___nodes___status',
  PostsNodesTagsNodes = 'posts___nodes___tags___nodes',
  PostsNodesTemplateTemplateName = 'posts___nodes___template___templateName',
  PostsNodesTermsNodes = 'posts___nodes___terms___nodes',
  PostsNodesTitle = 'posts___nodes___title',
  PostsNodesToPing = 'posts___nodes___toPing',
  PostsNodesUri = 'posts___nodes___uri',
  PostsNodesNodeType = 'posts___nodes___nodeType',
  PostsNodesParentId = 'posts___nodes___parent___id',
  PostsNodesParentChildren = 'posts___nodes___parent___children',
  PostsNodesChildren = 'posts___nodes___children',
  PostsNodesChildrenId = 'posts___nodes___children___id',
  PostsNodesChildrenChildren = 'posts___nodes___children___children',
  PostsNodesInternalContent = 'posts___nodes___internal___content',
  PostsNodesInternalContentDigest = 'posts___nodes___internal___contentDigest',
  PostsNodesInternalDescription = 'posts___nodes___internal___description',
  PostsNodesInternalFieldOwners = 'posts___nodes___internal___fieldOwners',
  PostsNodesInternalIgnoreType = 'posts___nodes___internal___ignoreType',
  PostsNodesInternalMediaType = 'posts___nodes___internal___mediaType',
  PostsNodesInternalOwner = 'posts___nodes___internal___owner',
  PostsNodesInternalType = 'posts___nodes___internal___type',
  Slug = 'slug',
  TaxonomyNodeArchivePath = 'taxonomy___node___archivePath',
  TaxonomyNodeConnectedContentTypesNodes = 'taxonomy___node___connectedContentTypes___nodes',
  TaxonomyNodeDescription = 'taxonomy___node___description',
  TaxonomyNodeGraphqlPluralName = 'taxonomy___node___graphqlPluralName',
  TaxonomyNodeGraphqlSingleName = 'taxonomy___node___graphqlSingleName',
  TaxonomyNodeHierarchical = 'taxonomy___node___hierarchical',
  TaxonomyNodeId = 'taxonomy___node___id',
  TaxonomyNodeLabel = 'taxonomy___node___label',
  TaxonomyNodeName = 'taxonomy___node___name',
  TaxonomyNodePublic = 'taxonomy___node___public',
  TaxonomyNodeRestBase = 'taxonomy___node___restBase',
  TaxonomyNodeRestControllerClass = 'taxonomy___node___restControllerClass',
  TaxonomyNodeShowCloud = 'taxonomy___node___showCloud',
  TaxonomyNodeShowInAdminColumn = 'taxonomy___node___showInAdminColumn',
  TaxonomyNodeShowInGraphql = 'taxonomy___node___showInGraphql',
  TaxonomyNodeShowInMenu = 'taxonomy___node___showInMenu',
  TaxonomyNodeShowInNavMenus = 'taxonomy___node___showInNavMenus',
  TaxonomyNodeShowInQuickEdit = 'taxonomy___node___showInQuickEdit',
  TaxonomyNodeShowInRest = 'taxonomy___node___showInRest',
  TaxonomyNodeShowUi = 'taxonomy___node___showUi',
  TaxonomyNodeNodeType = 'taxonomy___node___nodeType',
  TaxonomyNodeParentId = 'taxonomy___node___parent___id',
  TaxonomyNodeParentChildren = 'taxonomy___node___parent___children',
  TaxonomyNodeChildren = 'taxonomy___node___children',
  TaxonomyNodeChildrenId = 'taxonomy___node___children___id',
  TaxonomyNodeChildrenChildren = 'taxonomy___node___children___children',
  TaxonomyNodeInternalContent = 'taxonomy___node___internal___content',
  TaxonomyNodeInternalContentDigest = 'taxonomy___node___internal___contentDigest',
  TaxonomyNodeInternalDescription = 'taxonomy___node___internal___description',
  TaxonomyNodeInternalFieldOwners = 'taxonomy___node___internal___fieldOwners',
  TaxonomyNodeInternalIgnoreType = 'taxonomy___node___internal___ignoreType',
  TaxonomyNodeInternalMediaType = 'taxonomy___node___internal___mediaType',
  TaxonomyNodeInternalOwner = 'taxonomy___node___internal___owner',
  TaxonomyNodeInternalType = 'taxonomy___node___internal___type',
  TermGroupId = 'termGroupId',
  TermTaxonomyId = 'termTaxonomyId',
  Uri = 'uri',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpPostFormatFilterInput = {
  contentNodes?: Maybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpPostFormatToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpPostFormatFilterListInput = {
  elemMatch?: Maybe<WpPostFormatFilterInput>;
};

export type WpPostFormatGroupConnection = {
  __typename?: 'WpPostFormatGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpPostFormatEdge>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPostFormatSortInput = {
  fields?: Maybe<Array<Maybe<WpPostFormatFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the postFormat type and the ContentNode type */
export type WpPostFormatToContentNodeConnection = {
  __typename?: 'WpPostFormatToContentNodeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpPostFormatToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the postFormat type and the post type */
export type WpPostFormatToPostConnection = {
  __typename?: 'WpPostFormatToPostConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpPostFormatToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type WpPostFormatToTaxonomyConnectionEdge = {
  __typename?: 'WpPostFormatToTaxonomyConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

export type WpPostFormatToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

export type WpPostGroupConnection = {
  __typename?: 'WpPostGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpPostEdge>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpPostSortInput = {
  fields?: Maybe<Array<Maybe<WpPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the post type and the category type */
export type WpPostToCategoryConnection = {
  __typename?: 'WpPostToCategoryConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpPostToCategoryConnectionFilterInput = {
  nodes?: Maybe<WpCategoryFilterListInput>;
};

/** Connection between the post type and the Comment type */
export type WpPostToCommentConnection = {
  __typename?: 'WpPostToCommentConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpPostToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

/** Connection between the post type and the postFormat type */
export type WpPostToPostFormatConnection = {
  __typename?: 'WpPostToPostFormatConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPostFormat>>>;
};

export type WpPostToPostFormatConnectionFilterInput = {
  nodes?: Maybe<WpPostFormatFilterListInput>;
};

/** Connection between the post type and the tag type */
export type WpPostToTagConnection = {
  __typename?: 'WpPostToTagConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTag>>>;
};

export type WpPostToTagConnectionFilterInput = {
  nodes?: Maybe<WpTagFilterListInput>;
};

/** Connection between the post type and the TermNode type */
export type WpPostToTermNodeConnection = {
  __typename?: 'WpPostToTermNodeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTermNode>>>;
};

export type WpPostToTermNodeConnectionFilterInput = {
  nodes?: Maybe<WpTermNodeFilterListInput>;
};

/** Details for labels of the PostType */
export type WpPostTypeLabelDetails = {
  __typename?: 'WpPostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

export type WpPostTypeLabelDetailsFilterInput = {
  addNew?: Maybe<StringQueryOperatorInput>;
  addNewItem?: Maybe<StringQueryOperatorInput>;
  allItems?: Maybe<StringQueryOperatorInput>;
  archives?: Maybe<StringQueryOperatorInput>;
  attributes?: Maybe<StringQueryOperatorInput>;
  editItem?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<StringQueryOperatorInput>;
  filterItemsList?: Maybe<StringQueryOperatorInput>;
  insertIntoItem?: Maybe<StringQueryOperatorInput>;
  itemsList?: Maybe<StringQueryOperatorInput>;
  itemsListNavigation?: Maybe<StringQueryOperatorInput>;
  menuName?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  newItem?: Maybe<StringQueryOperatorInput>;
  notFound?: Maybe<StringQueryOperatorInput>;
  notFoundInTrash?: Maybe<StringQueryOperatorInput>;
  parentItemColon?: Maybe<StringQueryOperatorInput>;
  removeFeaturedImage?: Maybe<StringQueryOperatorInput>;
  searchItems?: Maybe<StringQueryOperatorInput>;
  setFeaturedImage?: Maybe<StringQueryOperatorInput>;
  singularName?: Maybe<StringQueryOperatorInput>;
  uploadedToThisItem?: Maybe<StringQueryOperatorInput>;
  useFeaturedImage?: Maybe<StringQueryOperatorInput>;
  viewItem?: Maybe<StringQueryOperatorInput>;
  viewItems?: Maybe<StringQueryOperatorInput>;
};

/** The reading setting type */
export type WpReadingSettings = {
  __typename?: 'WpReadingSettings';
  /** Blog pages show at most. */
  postsPerPage?: Maybe<Scalars['Int']>;
};

export type WpReadingSettingsFilterInput = {
  postsPerPage?: Maybe<IntQueryOperatorInput>;
};

/** All of the registered settings */
export type WpSettings = {
  __typename?: 'WpSettings';
  /** Allow people to submit comments on new posts. */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** A date format for all date strings. */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Site tagline. */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Site title. */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Site URL. */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Blog pages show at most. */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Default post category. */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Default post format. */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

export type WpSettingsFilterInput = {
  discussionSettingsDefaultCommentStatus?: Maybe<StringQueryOperatorInput>;
  discussionSettingsDefaultPingStatus?: Maybe<StringQueryOperatorInput>;
  generalSettingsDateFormat?: Maybe<StringQueryOperatorInput>;
  generalSettingsDescription?: Maybe<StringQueryOperatorInput>;
  generalSettingsEmail?: Maybe<StringQueryOperatorInput>;
  generalSettingsLanguage?: Maybe<StringQueryOperatorInput>;
  generalSettingsStartOfWeek?: Maybe<IntQueryOperatorInput>;
  generalSettingsTimeFormat?: Maybe<StringQueryOperatorInput>;
  generalSettingsTimezone?: Maybe<StringQueryOperatorInput>;
  generalSettingsTitle?: Maybe<StringQueryOperatorInput>;
  generalSettingsUrl?: Maybe<StringQueryOperatorInput>;
  readingSettingsPostsPerPage?: Maybe<IntQueryOperatorInput>;
  writingSettingsDefaultCategory?: Maybe<IntQueryOperatorInput>;
  writingSettingsDefaultPostFormat?: Maybe<StringQueryOperatorInput>;
  writingSettingsUseSmilies?: Maybe<BooleanQueryOperatorInput>;
};

export type WpSortInput = {
  fields?: Maybe<Array<Maybe<WpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** The tag type */
export type WpTag = Node & WpNode & WpTermNode & WpDatabaseIdentifier & WpUniformResourceIdentifiable & WpMenuItemLinkable & {
  __typename?: 'WpTag';
  /** Connection between the tag type and the ContentNode type */
  contentNodes?: Maybe<WpTagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the post type */
  posts?: Maybe<WpTagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the Taxonomy type */
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpTagConnection = {
  __typename?: 'WpTagConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpTagEdge>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpTagGroupConnection>;
};


export type WpTagConnectionDistinctArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTagFieldsEnum;
};

export type WpTagEdge = {
  __typename?: 'WpTagEdge';
  next?: Maybe<WpTag>;
  node: WpTag;
  previous?: Maybe<WpTag>;
};

export enum WpTagFieldsEnum {
  ContentNodesNodes = 'contentNodes___nodes',
  ContentNodesNodesDatabaseId = 'contentNodes___nodes___databaseId',
  ContentNodesNodesDate = 'contentNodes___nodes___date',
  ContentNodesNodesDateGmt = 'contentNodes___nodes___dateGmt',
  ContentNodesNodesDesiredSlug = 'contentNodes___nodes___desiredSlug',
  ContentNodesNodesEnclosure = 'contentNodes___nodes___enclosure',
  ContentNodesNodesGuid = 'contentNodes___nodes___guid',
  ContentNodesNodesId = 'contentNodes___nodes___id',
  ContentNodesNodesLink = 'contentNodes___nodes___link',
  ContentNodesNodesModified = 'contentNodes___nodes___modified',
  ContentNodesNodesModifiedGmt = 'contentNodes___nodes___modifiedGmt',
  ContentNodesNodesSlug = 'contentNodes___nodes___slug',
  ContentNodesNodesStatus = 'contentNodes___nodes___status',
  ContentNodesNodesTemplateTemplateName = 'contentNodes___nodes___template___templateName',
  ContentNodesNodesUri = 'contentNodes___nodes___uri',
  ContentNodesNodesNodeType = 'contentNodes___nodes___nodeType',
  Count = 'count',
  DatabaseId = 'databaseId',
  Description = 'description',
  Id = 'id',
  Link = 'link',
  Name = 'name',
  PostsNodes = 'posts___nodes',
  PostsNodesAuthorDatabaseId = 'posts___nodes___authorDatabaseId',
  PostsNodesAuthorId = 'posts___nodes___authorId',
  PostsNodesCategoriesNodes = 'posts___nodes___categories___nodes',
  PostsNodesCommentCount = 'posts___nodes___commentCount',
  PostsNodesCommentStatus = 'posts___nodes___commentStatus',
  PostsNodesCommentsNodes = 'posts___nodes___comments___nodes',
  PostsNodesContent = 'posts___nodes___content',
  PostsNodesDatabaseId = 'posts___nodes___databaseId',
  PostsNodesDate = 'posts___nodes___date',
  PostsNodesDateGmt = 'posts___nodes___dateGmt',
  PostsNodesDesiredSlug = 'posts___nodes___desiredSlug',
  PostsNodesEnclosure = 'posts___nodes___enclosure',
  PostsNodesExcerpt = 'posts___nodes___excerpt',
  PostsNodesFeaturedImageDatabaseId = 'posts___nodes___featuredImageDatabaseId',
  PostsNodesFeaturedImageId = 'posts___nodes___featuredImageId',
  PostsNodesGuid = 'posts___nodes___guid',
  PostsNodesId = 'posts___nodes___id',
  PostsNodesIsRevision = 'posts___nodes___isRevision',
  PostsNodesIsSticky = 'posts___nodes___isSticky',
  PostsNodesLink = 'posts___nodes___link',
  PostsNodesModified = 'posts___nodes___modified',
  PostsNodesModifiedGmt = 'posts___nodes___modifiedGmt',
  PostsNodesPingStatus = 'posts___nodes___pingStatus',
  PostsNodesPinged = 'posts___nodes___pinged',
  PostsNodesPostFormatsNodes = 'posts___nodes___postFormats___nodes',
  PostsNodesSlug = 'posts___nodes___slug',
  PostsNodesStatus = 'posts___nodes___status',
  PostsNodesTagsNodes = 'posts___nodes___tags___nodes',
  PostsNodesTemplateTemplateName = 'posts___nodes___template___templateName',
  PostsNodesTermsNodes = 'posts___nodes___terms___nodes',
  PostsNodesTitle = 'posts___nodes___title',
  PostsNodesToPing = 'posts___nodes___toPing',
  PostsNodesUri = 'posts___nodes___uri',
  PostsNodesNodeType = 'posts___nodes___nodeType',
  PostsNodesParentId = 'posts___nodes___parent___id',
  PostsNodesParentChildren = 'posts___nodes___parent___children',
  PostsNodesChildren = 'posts___nodes___children',
  PostsNodesChildrenId = 'posts___nodes___children___id',
  PostsNodesChildrenChildren = 'posts___nodes___children___children',
  PostsNodesInternalContent = 'posts___nodes___internal___content',
  PostsNodesInternalContentDigest = 'posts___nodes___internal___contentDigest',
  PostsNodesInternalDescription = 'posts___nodes___internal___description',
  PostsNodesInternalFieldOwners = 'posts___nodes___internal___fieldOwners',
  PostsNodesInternalIgnoreType = 'posts___nodes___internal___ignoreType',
  PostsNodesInternalMediaType = 'posts___nodes___internal___mediaType',
  PostsNodesInternalOwner = 'posts___nodes___internal___owner',
  PostsNodesInternalType = 'posts___nodes___internal___type',
  Slug = 'slug',
  TaxonomyNodeArchivePath = 'taxonomy___node___archivePath',
  TaxonomyNodeConnectedContentTypesNodes = 'taxonomy___node___connectedContentTypes___nodes',
  TaxonomyNodeDescription = 'taxonomy___node___description',
  TaxonomyNodeGraphqlPluralName = 'taxonomy___node___graphqlPluralName',
  TaxonomyNodeGraphqlSingleName = 'taxonomy___node___graphqlSingleName',
  TaxonomyNodeHierarchical = 'taxonomy___node___hierarchical',
  TaxonomyNodeId = 'taxonomy___node___id',
  TaxonomyNodeLabel = 'taxonomy___node___label',
  TaxonomyNodeName = 'taxonomy___node___name',
  TaxonomyNodePublic = 'taxonomy___node___public',
  TaxonomyNodeRestBase = 'taxonomy___node___restBase',
  TaxonomyNodeRestControllerClass = 'taxonomy___node___restControllerClass',
  TaxonomyNodeShowCloud = 'taxonomy___node___showCloud',
  TaxonomyNodeShowInAdminColumn = 'taxonomy___node___showInAdminColumn',
  TaxonomyNodeShowInGraphql = 'taxonomy___node___showInGraphql',
  TaxonomyNodeShowInMenu = 'taxonomy___node___showInMenu',
  TaxonomyNodeShowInNavMenus = 'taxonomy___node___showInNavMenus',
  TaxonomyNodeShowInQuickEdit = 'taxonomy___node___showInQuickEdit',
  TaxonomyNodeShowInRest = 'taxonomy___node___showInRest',
  TaxonomyNodeShowUi = 'taxonomy___node___showUi',
  TaxonomyNodeNodeType = 'taxonomy___node___nodeType',
  TaxonomyNodeParentId = 'taxonomy___node___parent___id',
  TaxonomyNodeParentChildren = 'taxonomy___node___parent___children',
  TaxonomyNodeChildren = 'taxonomy___node___children',
  TaxonomyNodeChildrenId = 'taxonomy___node___children___id',
  TaxonomyNodeChildrenChildren = 'taxonomy___node___children___children',
  TaxonomyNodeInternalContent = 'taxonomy___node___internal___content',
  TaxonomyNodeInternalContentDigest = 'taxonomy___node___internal___contentDigest',
  TaxonomyNodeInternalDescription = 'taxonomy___node___internal___description',
  TaxonomyNodeInternalFieldOwners = 'taxonomy___node___internal___fieldOwners',
  TaxonomyNodeInternalIgnoreType = 'taxonomy___node___internal___ignoreType',
  TaxonomyNodeInternalMediaType = 'taxonomy___node___internal___mediaType',
  TaxonomyNodeInternalOwner = 'taxonomy___node___internal___owner',
  TaxonomyNodeInternalType = 'taxonomy___node___internal___type',
  TermGroupId = 'termGroupId',
  TermTaxonomyId = 'termTaxonomyId',
  Uri = 'uri',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpTagFilterInput = {
  contentNodes?: Maybe<WpTagToContentNodeConnectionFilterInput>;
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<WpTagToPostConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpTagFilterListInput = {
  elemMatch?: Maybe<WpTagFilterInput>;
};

export type WpTagGroupConnection = {
  __typename?: 'WpTagGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpTagEdge>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTagSortInput = {
  fields?: Maybe<Array<Maybe<WpTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the tag type and the ContentNode type */
export type WpTagToContentNodeConnection = {
  __typename?: 'WpTagToContentNodeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpTagToContentNodeConnectionFilterInput = {
  nodes?: Maybe<WpContentNodeFilterListInput>;
};

/** Connection between the tag type and the post type */
export type WpTagToPostConnection = {
  __typename?: 'WpTagToPostConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpTagToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

/** Connection between the tag type and the Taxonomy type */
export type WpTagToTaxonomyConnectionEdge = {
  __typename?: 'WpTagToTaxonomyConnectionEdge';
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

export type WpTagToTaxonomyConnectionEdgeFilterInput = {
  node?: Maybe<WpTaxonomyFilterInput>;
};

/** A taxonomy object */
export type WpTaxonomy = Node & WpNode & {
  __typename?: 'WpTaxonomy';
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']>;
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpTaxonomyConnection = {
  __typename?: 'WpTaxonomyConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpTaxonomyEdge>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpTaxonomyGroupConnection>;
};


export type WpTaxonomyConnectionDistinctArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTaxonomyFieldsEnum;
};

export type WpTaxonomyEdge = {
  __typename?: 'WpTaxonomyEdge';
  next?: Maybe<WpTaxonomy>;
  node: WpTaxonomy;
  previous?: Maybe<WpTaxonomy>;
};

export enum WpTaxonomyFieldsEnum {
  ArchivePath = 'archivePath',
  ConnectedContentTypesNodes = 'connectedContentTypes___nodes',
  ConnectedContentTypesNodesArchivePath = 'connectedContentTypes___nodes___archivePath',
  ConnectedContentTypesNodesCanExport = 'connectedContentTypes___nodes___canExport',
  ConnectedContentTypesNodesConnectedTaxonomiesNodes = 'connectedContentTypes___nodes___connectedTaxonomies___nodes',
  ConnectedContentTypesNodesContentNodesNodes = 'connectedContentTypes___nodes___contentNodes___nodes',
  ConnectedContentTypesNodesDeleteWithUser = 'connectedContentTypes___nodes___deleteWithUser',
  ConnectedContentTypesNodesDescription = 'connectedContentTypes___nodes___description',
  ConnectedContentTypesNodesExcludeFromSearch = 'connectedContentTypes___nodes___excludeFromSearch',
  ConnectedContentTypesNodesGraphqlPluralName = 'connectedContentTypes___nodes___graphqlPluralName',
  ConnectedContentTypesNodesGraphqlSingleName = 'connectedContentTypes___nodes___graphqlSingleName',
  ConnectedContentTypesNodesHasArchive = 'connectedContentTypes___nodes___hasArchive',
  ConnectedContentTypesNodesHierarchical = 'connectedContentTypes___nodes___hierarchical',
  ConnectedContentTypesNodesId = 'connectedContentTypes___nodes___id',
  ConnectedContentTypesNodesIsFrontPage = 'connectedContentTypes___nodes___isFrontPage',
  ConnectedContentTypesNodesIsPostsPage = 'connectedContentTypes___nodes___isPostsPage',
  ConnectedContentTypesNodesLabel = 'connectedContentTypes___nodes___label',
  ConnectedContentTypesNodesLabelsAddNew = 'connectedContentTypes___nodes___labels___addNew',
  ConnectedContentTypesNodesLabelsAddNewItem = 'connectedContentTypes___nodes___labels___addNewItem',
  ConnectedContentTypesNodesLabelsAllItems = 'connectedContentTypes___nodes___labels___allItems',
  ConnectedContentTypesNodesLabelsArchives = 'connectedContentTypes___nodes___labels___archives',
  ConnectedContentTypesNodesLabelsAttributes = 'connectedContentTypes___nodes___labels___attributes',
  ConnectedContentTypesNodesLabelsEditItem = 'connectedContentTypes___nodes___labels___editItem',
  ConnectedContentTypesNodesLabelsFeaturedImage = 'connectedContentTypes___nodes___labels___featuredImage',
  ConnectedContentTypesNodesLabelsFilterItemsList = 'connectedContentTypes___nodes___labels___filterItemsList',
  ConnectedContentTypesNodesLabelsInsertIntoItem = 'connectedContentTypes___nodes___labels___insertIntoItem',
  ConnectedContentTypesNodesLabelsItemsList = 'connectedContentTypes___nodes___labels___itemsList',
  ConnectedContentTypesNodesLabelsItemsListNavigation = 'connectedContentTypes___nodes___labels___itemsListNavigation',
  ConnectedContentTypesNodesLabelsMenuName = 'connectedContentTypes___nodes___labels___menuName',
  ConnectedContentTypesNodesLabelsName = 'connectedContentTypes___nodes___labels___name',
  ConnectedContentTypesNodesLabelsNewItem = 'connectedContentTypes___nodes___labels___newItem',
  ConnectedContentTypesNodesLabelsNotFound = 'connectedContentTypes___nodes___labels___notFound',
  ConnectedContentTypesNodesLabelsNotFoundInTrash = 'connectedContentTypes___nodes___labels___notFoundInTrash',
  ConnectedContentTypesNodesLabelsParentItemColon = 'connectedContentTypes___nodes___labels___parentItemColon',
  ConnectedContentTypesNodesLabelsRemoveFeaturedImage = 'connectedContentTypes___nodes___labels___removeFeaturedImage',
  ConnectedContentTypesNodesLabelsSearchItems = 'connectedContentTypes___nodes___labels___searchItems',
  ConnectedContentTypesNodesLabelsSetFeaturedImage = 'connectedContentTypes___nodes___labels___setFeaturedImage',
  ConnectedContentTypesNodesLabelsSingularName = 'connectedContentTypes___nodes___labels___singularName',
  ConnectedContentTypesNodesLabelsUploadedToThisItem = 'connectedContentTypes___nodes___labels___uploadedToThisItem',
  ConnectedContentTypesNodesLabelsUseFeaturedImage = 'connectedContentTypes___nodes___labels___useFeaturedImage',
  ConnectedContentTypesNodesLabelsViewItem = 'connectedContentTypes___nodes___labels___viewItem',
  ConnectedContentTypesNodesLabelsViewItems = 'connectedContentTypes___nodes___labels___viewItems',
  ConnectedContentTypesNodesMenuIcon = 'connectedContentTypes___nodes___menuIcon',
  ConnectedContentTypesNodesMenuPosition = 'connectedContentTypes___nodes___menuPosition',
  ConnectedContentTypesNodesName = 'connectedContentTypes___nodes___name',
  ConnectedContentTypesNodesPublic = 'connectedContentTypes___nodes___public',
  ConnectedContentTypesNodesPubliclyQueryable = 'connectedContentTypes___nodes___publiclyQueryable',
  ConnectedContentTypesNodesRestBase = 'connectedContentTypes___nodes___restBase',
  ConnectedContentTypesNodesRestControllerClass = 'connectedContentTypes___nodes___restControllerClass',
  ConnectedContentTypesNodesShowInAdminBar = 'connectedContentTypes___nodes___showInAdminBar',
  ConnectedContentTypesNodesShowInGraphql = 'connectedContentTypes___nodes___showInGraphql',
  ConnectedContentTypesNodesShowInMenu = 'connectedContentTypes___nodes___showInMenu',
  ConnectedContentTypesNodesShowInNavMenus = 'connectedContentTypes___nodes___showInNavMenus',
  ConnectedContentTypesNodesShowInRest = 'connectedContentTypes___nodes___showInRest',
  ConnectedContentTypesNodesShowUi = 'connectedContentTypes___nodes___showUi',
  ConnectedContentTypesNodesUri = 'connectedContentTypes___nodes___uri',
  ConnectedContentTypesNodesNodeType = 'connectedContentTypes___nodes___nodeType',
  ConnectedContentTypesNodesParentId = 'connectedContentTypes___nodes___parent___id',
  ConnectedContentTypesNodesParentChildren = 'connectedContentTypes___nodes___parent___children',
  ConnectedContentTypesNodesChildren = 'connectedContentTypes___nodes___children',
  ConnectedContentTypesNodesChildrenId = 'connectedContentTypes___nodes___children___id',
  ConnectedContentTypesNodesChildrenChildren = 'connectedContentTypes___nodes___children___children',
  ConnectedContentTypesNodesInternalContent = 'connectedContentTypes___nodes___internal___content',
  ConnectedContentTypesNodesInternalContentDigest = 'connectedContentTypes___nodes___internal___contentDigest',
  ConnectedContentTypesNodesInternalDescription = 'connectedContentTypes___nodes___internal___description',
  ConnectedContentTypesNodesInternalFieldOwners = 'connectedContentTypes___nodes___internal___fieldOwners',
  ConnectedContentTypesNodesInternalIgnoreType = 'connectedContentTypes___nodes___internal___ignoreType',
  ConnectedContentTypesNodesInternalMediaType = 'connectedContentTypes___nodes___internal___mediaType',
  ConnectedContentTypesNodesInternalOwner = 'connectedContentTypes___nodes___internal___owner',
  ConnectedContentTypesNodesInternalType = 'connectedContentTypes___nodes___internal___type',
  Description = 'description',
  GraphqlPluralName = 'graphqlPluralName',
  GraphqlSingleName = 'graphqlSingleName',
  Hierarchical = 'hierarchical',
  Id = 'id',
  Label = 'label',
  Name = 'name',
  Public = 'public',
  RestBase = 'restBase',
  RestControllerClass = 'restControllerClass',
  ShowCloud = 'showCloud',
  ShowInAdminColumn = 'showInAdminColumn',
  ShowInGraphql = 'showInGraphql',
  ShowInMenu = 'showInMenu',
  ShowInNavMenus = 'showInNavMenus',
  ShowInQuickEdit = 'showInQuickEdit',
  ShowInRest = 'showInRest',
  ShowUi = 'showUi',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpTaxonomyFilterInput = {
  archivePath?: Maybe<StringQueryOperatorInput>;
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  graphqlPluralName?: Maybe<StringQueryOperatorInput>;
  graphqlSingleName?: Maybe<StringQueryOperatorInput>;
  hierarchical?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  public?: Maybe<BooleanQueryOperatorInput>;
  restBase?: Maybe<StringQueryOperatorInput>;
  restControllerClass?: Maybe<StringQueryOperatorInput>;
  showCloud?: Maybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: Maybe<BooleanQueryOperatorInput>;
  showInGraphql?: Maybe<BooleanQueryOperatorInput>;
  showInMenu?: Maybe<BooleanQueryOperatorInput>;
  showInNavMenus?: Maybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: Maybe<BooleanQueryOperatorInput>;
  showInRest?: Maybe<BooleanQueryOperatorInput>;
  showUi?: Maybe<BooleanQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpTaxonomyFilterListInput = {
  elemMatch?: Maybe<WpTaxonomyFilterInput>;
};

export type WpTaxonomyGroupConnection = {
  __typename?: 'WpTaxonomyGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpTaxonomyEdge>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTaxonomySortInput = {
  fields?: Maybe<Array<Maybe<WpTaxonomyFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type WpTaxonomyToContentTypeConnection = {
  __typename?: 'WpTaxonomyToContentTypeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentType>>>;
};

export type WpTaxonomyToContentTypeConnectionFilterInput = {
  nodes?: Maybe<WpContentTypeFilterListInput>;
};

export type WpTermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the term */
  id: Scalars['ID'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  nodeType?: Maybe<Scalars['String']>;
};

export type WpTermNodeConnection = {
  __typename?: 'WpTermNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpTermNodeEdge>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpTermNodeGroupConnection>;
};


export type WpTermNodeConnectionDistinctArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpTermNodeFieldsEnum;
};

export type WpTermNodeEdge = {
  __typename?: 'WpTermNodeEdge';
  next?: Maybe<WpTermNode>;
  node: WpTermNode;
  previous?: Maybe<WpTermNode>;
};

export enum WpTermNodeFieldsEnum {
  Count = 'count',
  DatabaseId = 'databaseId',
  Description = 'description',
  Id = 'id',
  Link = 'link',
  Name = 'name',
  Slug = 'slug',
  TermGroupId = 'termGroupId',
  TermTaxonomyId = 'termTaxonomyId',
  Uri = 'uri',
  NodeType = 'nodeType'
}

export type WpTermNodeFilterInput = {
  count?: Maybe<IntQueryOperatorInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  termGroupId?: Maybe<IntQueryOperatorInput>;
  termTaxonomyId?: Maybe<IntQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type WpTermNodeFilterListInput = {
  elemMatch?: Maybe<WpTermNodeFilterInput>;
};

export type WpTermNodeGroupConnection = {
  __typename?: 'WpTermNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpTermNodeEdge>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpTermNodeSortInput = {
  fields?: Maybe<Array<Maybe<WpTermNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpUniformResourceIdentifiable = {
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** A User object */
export type WpUser = Node & WpNode & WpUniformResourceIdentifiable & WpCommenter & WpDatabaseIdentifier & {
  __typename?: 'WpUser';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<WpUserToCommentConnection>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']>;
  /**
   * A complete list of capabilities including capabilities inherited from a role.
   * This is equivalent to the array keys of WP_User-&gt;allcaps.
   */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<WpUserToPageConnection>;
  /** Connection between the User type and the post type */
  posts?: Maybe<WpUserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<WpUserToUserRoleConnection>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpUserConnection = {
  __typename?: 'WpUserConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpUserEdge>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpUserGroupConnection>;
};


export type WpUserConnectionDistinctArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpUserFieldsEnum;
};

export type WpUserEdge = {
  __typename?: 'WpUserEdge';
  next?: Maybe<WpUser>;
  node: WpUser;
  previous?: Maybe<WpUser>;
};

export enum WpUserFieldsEnum {
  AvatarDefault = 'avatar___default',
  AvatarExtraAttr = 'avatar___extraAttr',
  AvatarForceDefault = 'avatar___forceDefault',
  AvatarFoundAvatar = 'avatar___foundAvatar',
  AvatarHeight = 'avatar___height',
  AvatarRating = 'avatar___rating',
  AvatarScheme = 'avatar___scheme',
  AvatarSize = 'avatar___size',
  AvatarUrl = 'avatar___url',
  AvatarWidth = 'avatar___width',
  CapKey = 'capKey',
  Capabilities = 'capabilities',
  CommentsNodes = 'comments___nodes',
  CommentsNodesAgent = 'comments___nodes___agent',
  CommentsNodesApproved = 'comments___nodes___approved',
  CommentsNodesAuthorIp = 'comments___nodes___authorIp',
  CommentsNodesContent = 'comments___nodes___content',
  CommentsNodesDatabaseId = 'comments___nodes___databaseId',
  CommentsNodesDate = 'comments___nodes___date',
  CommentsNodesDateGmt = 'comments___nodes___dateGmt',
  CommentsNodesId = 'comments___nodes___id',
  CommentsNodesKarma = 'comments___nodes___karma',
  CommentsNodesParentDatabaseId = 'comments___nodes___parentDatabaseId',
  CommentsNodesParentId = 'comments___nodes___parentId',
  CommentsNodesRepliesNodes = 'comments___nodes___replies___nodes',
  CommentsNodesType = 'comments___nodes___type',
  CommentsNodesNodeType = 'comments___nodes___nodeType',
  CommentsNodesParentId = 'comments___nodes___parent___id',
  CommentsNodesParentChildren = 'comments___nodes___parent___children',
  CommentsNodesChildren = 'comments___nodes___children',
  CommentsNodesChildrenId = 'comments___nodes___children___id',
  CommentsNodesChildrenChildren = 'comments___nodes___children___children',
  CommentsNodesInternalContent = 'comments___nodes___internal___content',
  CommentsNodesInternalContentDigest = 'comments___nodes___internal___contentDigest',
  CommentsNodesInternalDescription = 'comments___nodes___internal___description',
  CommentsNodesInternalFieldOwners = 'comments___nodes___internal___fieldOwners',
  CommentsNodesInternalIgnoreType = 'comments___nodes___internal___ignoreType',
  CommentsNodesInternalMediaType = 'comments___nodes___internal___mediaType',
  CommentsNodesInternalOwner = 'comments___nodes___internal___owner',
  CommentsNodesInternalType = 'comments___nodes___internal___type',
  DatabaseId = 'databaseId',
  Description = 'description',
  Email = 'email',
  ExtraCapabilities = 'extraCapabilities',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Locale = 'locale',
  Name = 'name',
  Nicename = 'nicename',
  Nickname = 'nickname',
  PagesNodes = 'pages___nodes',
  PagesNodesAncestorsNodes = 'pages___nodes___ancestors___nodes',
  PagesNodesAuthorDatabaseId = 'pages___nodes___authorDatabaseId',
  PagesNodesAuthorId = 'pages___nodes___authorId',
  PagesNodesWpChildrenNodes = 'pages___nodes___wpChildren___nodes',
  PagesNodesCommentCount = 'pages___nodes___commentCount',
  PagesNodesCommentStatus = 'pages___nodes___commentStatus',
  PagesNodesCommentsNodes = 'pages___nodes___comments___nodes',
  PagesNodesContent = 'pages___nodes___content',
  PagesNodesDatabaseId = 'pages___nodes___databaseId',
  PagesNodesDate = 'pages___nodes___date',
  PagesNodesDateGmt = 'pages___nodes___dateGmt',
  PagesNodesDesiredSlug = 'pages___nodes___desiredSlug',
  PagesNodesEnclosure = 'pages___nodes___enclosure',
  PagesNodesFeaturedImageDatabaseId = 'pages___nodes___featuredImageDatabaseId',
  PagesNodesFeaturedImageId = 'pages___nodes___featuredImageId',
  PagesNodesGuid = 'pages___nodes___guid',
  PagesNodesId = 'pages___nodes___id',
  PagesNodesIsFrontPage = 'pages___nodes___isFrontPage',
  PagesNodesIsPostsPage = 'pages___nodes___isPostsPage',
  PagesNodesIsRevision = 'pages___nodes___isRevision',
  PagesNodesLink = 'pages___nodes___link',
  PagesNodesMenuOrder = 'pages___nodes___menuOrder',
  PagesNodesModified = 'pages___nodes___modified',
  PagesNodesModifiedGmt = 'pages___nodes___modifiedGmt',
  PagesNodesParentDatabaseId = 'pages___nodes___parentDatabaseId',
  PagesNodesParentId = 'pages___nodes___parentId',
  PagesNodesSlug = 'pages___nodes___slug',
  PagesNodesStatus = 'pages___nodes___status',
  PagesNodesTemplateTemplateName = 'pages___nodes___template___templateName',
  PagesNodesTitle = 'pages___nodes___title',
  PagesNodesUri = 'pages___nodes___uri',
  PagesNodesNodeType = 'pages___nodes___nodeType',
  PagesNodesParentId = 'pages___nodes___parent___id',
  PagesNodesParentChildren = 'pages___nodes___parent___children',
  PagesNodesChildren = 'pages___nodes___children',
  PagesNodesChildrenId = 'pages___nodes___children___id',
  PagesNodesChildrenChildren = 'pages___nodes___children___children',
  PagesNodesInternalContent = 'pages___nodes___internal___content',
  PagesNodesInternalContentDigest = 'pages___nodes___internal___contentDigest',
  PagesNodesInternalDescription = 'pages___nodes___internal___description',
  PagesNodesInternalFieldOwners = 'pages___nodes___internal___fieldOwners',
  PagesNodesInternalIgnoreType = 'pages___nodes___internal___ignoreType',
  PagesNodesInternalMediaType = 'pages___nodes___internal___mediaType',
  PagesNodesInternalOwner = 'pages___nodes___internal___owner',
  PagesNodesInternalType = 'pages___nodes___internal___type',
  PostsNodes = 'posts___nodes',
  PostsNodesAuthorDatabaseId = 'posts___nodes___authorDatabaseId',
  PostsNodesAuthorId = 'posts___nodes___authorId',
  PostsNodesCategoriesNodes = 'posts___nodes___categories___nodes',
  PostsNodesCommentCount = 'posts___nodes___commentCount',
  PostsNodesCommentStatus = 'posts___nodes___commentStatus',
  PostsNodesCommentsNodes = 'posts___nodes___comments___nodes',
  PostsNodesContent = 'posts___nodes___content',
  PostsNodesDatabaseId = 'posts___nodes___databaseId',
  PostsNodesDate = 'posts___nodes___date',
  PostsNodesDateGmt = 'posts___nodes___dateGmt',
  PostsNodesDesiredSlug = 'posts___nodes___desiredSlug',
  PostsNodesEnclosure = 'posts___nodes___enclosure',
  PostsNodesExcerpt = 'posts___nodes___excerpt',
  PostsNodesFeaturedImageDatabaseId = 'posts___nodes___featuredImageDatabaseId',
  PostsNodesFeaturedImageId = 'posts___nodes___featuredImageId',
  PostsNodesGuid = 'posts___nodes___guid',
  PostsNodesId = 'posts___nodes___id',
  PostsNodesIsRevision = 'posts___nodes___isRevision',
  PostsNodesIsSticky = 'posts___nodes___isSticky',
  PostsNodesLink = 'posts___nodes___link',
  PostsNodesModified = 'posts___nodes___modified',
  PostsNodesModifiedGmt = 'posts___nodes___modifiedGmt',
  PostsNodesPingStatus = 'posts___nodes___pingStatus',
  PostsNodesPinged = 'posts___nodes___pinged',
  PostsNodesPostFormatsNodes = 'posts___nodes___postFormats___nodes',
  PostsNodesSlug = 'posts___nodes___slug',
  PostsNodesStatus = 'posts___nodes___status',
  PostsNodesTagsNodes = 'posts___nodes___tags___nodes',
  PostsNodesTemplateTemplateName = 'posts___nodes___template___templateName',
  PostsNodesTermsNodes = 'posts___nodes___terms___nodes',
  PostsNodesTitle = 'posts___nodes___title',
  PostsNodesToPing = 'posts___nodes___toPing',
  PostsNodesUri = 'posts___nodes___uri',
  PostsNodesNodeType = 'posts___nodes___nodeType',
  PostsNodesParentId = 'posts___nodes___parent___id',
  PostsNodesParentChildren = 'posts___nodes___parent___children',
  PostsNodesChildren = 'posts___nodes___children',
  PostsNodesChildrenId = 'posts___nodes___children___id',
  PostsNodesChildrenChildren = 'posts___nodes___children___children',
  PostsNodesInternalContent = 'posts___nodes___internal___content',
  PostsNodesInternalContentDigest = 'posts___nodes___internal___contentDigest',
  PostsNodesInternalDescription = 'posts___nodes___internal___description',
  PostsNodesInternalFieldOwners = 'posts___nodes___internal___fieldOwners',
  PostsNodesInternalIgnoreType = 'posts___nodes___internal___ignoreType',
  PostsNodesInternalMediaType = 'posts___nodes___internal___mediaType',
  PostsNodesInternalOwner = 'posts___nodes___internal___owner',
  PostsNodesInternalType = 'posts___nodes___internal___type',
  RegisteredDate = 'registeredDate',
  RolesNodes = 'roles___nodes',
  RolesNodesCapabilities = 'roles___nodes___capabilities',
  RolesNodesDisplayName = 'roles___nodes___displayName',
  RolesNodesId = 'roles___nodes___id',
  RolesNodesName = 'roles___nodes___name',
  RolesNodesNodeType = 'roles___nodes___nodeType',
  RolesNodesParentId = 'roles___nodes___parent___id',
  RolesNodesParentChildren = 'roles___nodes___parent___children',
  RolesNodesChildren = 'roles___nodes___children',
  RolesNodesChildrenId = 'roles___nodes___children___id',
  RolesNodesChildrenChildren = 'roles___nodes___children___children',
  RolesNodesInternalContent = 'roles___nodes___internal___content',
  RolesNodesInternalContentDigest = 'roles___nodes___internal___contentDigest',
  RolesNodesInternalDescription = 'roles___nodes___internal___description',
  RolesNodesInternalFieldOwners = 'roles___nodes___internal___fieldOwners',
  RolesNodesInternalIgnoreType = 'roles___nodes___internal___ignoreType',
  RolesNodesInternalMediaType = 'roles___nodes___internal___mediaType',
  RolesNodesInternalOwner = 'roles___nodes___internal___owner',
  RolesNodesInternalType = 'roles___nodes___internal___type',
  Slug = 'slug',
  Uri = 'uri',
  Url = 'url',
  Username = 'username',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpUserFilterInput = {
  avatar?: Maybe<WpAvatarFilterInput>;
  capKey?: Maybe<StringQueryOperatorInput>;
  capabilities?: Maybe<StringQueryOperatorInput>;
  comments?: Maybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: Maybe<IntQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  extraCapabilities?: Maybe<StringQueryOperatorInput>;
  firstName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  lastName?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nicename?: Maybe<StringQueryOperatorInput>;
  nickname?: Maybe<StringQueryOperatorInput>;
  pages?: Maybe<WpUserToPageConnectionFilterInput>;
  posts?: Maybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: Maybe<StringQueryOperatorInput>;
  roles?: Maybe<WpUserToUserRoleConnectionFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpUserGroupConnection = {
  __typename?: 'WpUserGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpUserEdge>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

/** A user role object */
export type WpUserRole = Node & WpNode & {
  __typename?: 'WpUserRole';
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type WpUserRoleConnection = {
  __typename?: 'WpUserRoleConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpUserRoleEdge>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WpUserRoleGroupConnection>;
};


export type WpUserRoleConnectionDistinctArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WpUserRoleFieldsEnum;
};

export type WpUserRoleEdge = {
  __typename?: 'WpUserRoleEdge';
  next?: Maybe<WpUserRole>;
  node: WpUserRole;
  previous?: Maybe<WpUserRole>;
};

export enum WpUserRoleFieldsEnum {
  Capabilities = 'capabilities',
  DisplayName = 'displayName',
  Id = 'id',
  Name = 'name',
  NodeType = 'nodeType',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type WpUserRoleFilterInput = {
  capabilities?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type WpUserRoleFilterListInput = {
  elemMatch?: Maybe<WpUserRoleFilterInput>;
};

export type WpUserRoleGroupConnection = {
  __typename?: 'WpUserRoleGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<WpUserRoleEdge>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WpUserRoleSortInput = {
  fields?: Maybe<Array<Maybe<WpUserRoleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type WpUserSortInput = {
  fields?: Maybe<Array<Maybe<WpUserFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Connection between the User type and the Comment type */
export type WpUserToCommentConnection = {
  __typename?: 'WpUserToCommentConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpUserToCommentConnectionFilterInput = {
  nodes?: Maybe<WpCommentFilterListInput>;
};

/** Connection between the User type and the page type */
export type WpUserToPageConnection = {
  __typename?: 'WpUserToPageConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPage>>>;
};

export type WpUserToPageConnectionFilterInput = {
  nodes?: Maybe<WpPageFilterListInput>;
};

/** Connection between the User type and the post type */
export type WpUserToPostConnection = {
  __typename?: 'WpUserToPostConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpUserToPostConnectionFilterInput = {
  nodes?: Maybe<WpPostFilterListInput>;
};

/** Connection between the User type and the UserRole type */
export type WpUserToUserRoleConnection = {
  __typename?: 'WpUserToUserRoleConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpUserRole>>>;
};

export type WpUserToUserRoleConnectionFilterInput = {
  nodes?: Maybe<WpUserRoleFilterListInput>;
};

/** Information needed by gatsby-source-wordpress. */
export type WpWpGatsby = {
  __typename?: 'WpWPGatsby';
  /** Returns wether or not pretty permalinks are enabled. */
  arePrettyPermalinksEnabled?: Maybe<Scalars['Boolean']>;
};

export type WpWpGatsbyFilterInput = {
  arePrettyPermalinksEnabled?: Maybe<BooleanQueryOperatorInput>;
};

/** The writing setting type */
export type WpWritingSettings = {
  __typename?: 'WpWritingSettings';
  /** Default post category. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Default post format. */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

export type WpWritingSettingsFilterInput = {
  defaultCategory?: Maybe<IntQueryOperatorInput>;
  defaultPostFormat?: Maybe<StringQueryOperatorInput>;
  useSmilies?: Maybe<BooleanQueryOperatorInput>;
};

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = (
  { __typename?: 'ImageSharpFluid' }
  & { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] }
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpResolutions' }
  & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpSizesFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpSizes' }
  & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type PageTemplateQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type PageTemplateQuery = (
  { __typename?: 'Query' }
  & { wpPage?: Maybe<(
    { __typename?: 'WpPage' }
    & Pick<WpPage, 'id' | 'title' | 'content'>
  )> }
);

export type PostTemplateQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type PostTemplateQuery = (
  { __typename?: 'Query' }
  & { wpPost?: Maybe<(
    { __typename?: 'WpPost' }
    & Pick<WpPost, 'id' | 'title' | 'content'>
  )> }
);
