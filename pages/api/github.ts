import { getToken } from 'next-auth/jwt';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

const secret = process.env.SECRET;
const per_page = 50;

export default async function jwt(req: NextApiRequest, res: NextApiResponse) {
    const token = await getToken({ req, secret });
    const o = new Octokit({ auth: token.accessToken });
    const page = +req.query.page || 1;
    const stars = await o.rest.activity.listReposStarredByAuthenticatedUser({ per_page, page });
    res.send(JSON.stringify(stars.data, null, 2));
}
