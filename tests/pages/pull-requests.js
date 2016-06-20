import PageObject from 'travis/tests/page-object';

let {
  collection,
  hasClass,
  is,
  text,
  visitable
} = PageObject;

export default PageObject.create({
  visit: visitable(':organization/:repo/pull_requests'),

  pullRequests: collection({
    itemScope: '.build-list .pr-row',

    item: {
      name: text('.build-info a'),

      passed: hasClass('passed'),
      failed: hasClass('failed'),
      errored: hasClass('errored'),

      commitSha: text('.icon-github + .label-align'),
      committer: text('.row-committer .label-align'),
      commitDate: text('.icon-calendar + .label-align')
    }
  })
});
