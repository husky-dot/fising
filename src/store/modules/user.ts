import { VuexModule, Module, MutationAction, Mutation, Action, getModule } from 'vuex-module-decorators';
import { LoginApi, UserApi } from '@/api/index';
import { getToken, setToken, removeToken } from '@/utils/auth';
import store from '@/store';

export interface IUserState {
  loginName: string;
  name: string;
  phone: string;
  userId: string;
  userType: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  token = '';
  loginName = '';
  name = '';
  phone = '';
  userId = '';
  userType ='';
  avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif';
  @Mutation
  SET_TOKEN(token: string) {
    this.token = token;
  }

  @Action({ commit: 'SET_TOKEN' })
  async Login(userInfo: { username: string, password: string}) {
    const username = userInfo.username.trim();
    const { data } = await LoginApi.login(username, userInfo.password);
    setToken(data.token);
    return data.token;
  }

  @Action({ commit: 'SET_TOKEN' })
  async FedLogOut() {
    removeToken();
    return '';
  }

  @MutationAction({ mutate: ['loginName', 'name', 'phone', 'userId', 'userType'] })
  async GetInfo() {
    const token = getToken();
    if (token === undefined) {
      throw Error('GetInfo: token is undefined!');
    }
    const { data } = await UserApi.getInfo(token);
    if (data.roles && data.roles.length > 0) {
      return {
        loginName: data.loginName,
        name: data.name,
        phone: data.phone,
        userId: data.userId,
        userType: data.userType
      };
    } else {
      throw Error('GetInfo: roles must be a non-null array!');
    }
  }

  @MutationAction({ mutate: ['token'] })
  async LogOut() {
    if (getToken() === undefined) {
      throw Error('LogOut: token is undefined!');
    }
    removeToken();
    await LoginApi.logout();
    console.log('1111111111111')
    return {
      token: ''
    };
  }
}

export const UserModule = getModule(User);
