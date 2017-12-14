machine-uuid
--------

Get machine's hardware UUID on supported platform.  If all else fails, then persist a randomly generated uuid in file
`$homedir/.nodemid`

## Install

`yarn add find-or-create-uuid`

## Basic example

```
    require("machine-uuid")(function(uuid) {
      console.log(uuid)
    })
```
