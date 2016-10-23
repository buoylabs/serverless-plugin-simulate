const handler = (event, context, callback) => {
  console.log(process.execPath)
  console.log(process.execArgv)
  console.log(process.argv)
  console.log(process.cwd())
  console.log(process.mainModule.filename)
  console.log(__filename)
  console.log(process.env)
  console.log(process.getuid())
  console.log(process.getgid())
  console.log(process.geteuid())
  console.log(process.getegid())
  console.log(process.getgroups())
  console.log(process.umask())

  console.log(event)

  console.log(context)

  context.callbackWaitsForEmptyEventLoop = false

  console.log(context.getRemainingTimeInMillis())

  callback(null, { statusCode: 200, body: JSON.stringify([]) })
  //callback({ statusCode: 500 })
}

module.exports = {
  handler,
}